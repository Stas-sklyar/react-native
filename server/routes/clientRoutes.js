const Client = require('../models/Client')
const Task = require('../models/Task')
const Exercise = require('../models/Exercise')
const express = require('express')
const {Types} = require('mongoose')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const clients = await Client.find({})
    res.json(clients)
  } catch (error) {
    res.status(500).send(error)
  }
})
router.get('/:clientId', async (req, res) => {
  const {clientId} = req.params

  try {
    const client = await Client.findById(clientId)
      .populate('assignedTasks')
      .populate('assignedExercise')

    if (!client) {
      return res.status(404).json({message: 'Client not found'})
    }

    res.status(200).json(client)
  } catch (error) {
    res.status(500).json({message: 'Error fetching client data', error})
  }
})
router.post('/:clientId/tasks/:taskId', async (req, res) => {
  const {clientId, taskId} = req.params

  try {
    const client = await Client.findById(clientId)
    const task = await Task.findById(taskId)

    if (!client || !task) {
      return res.status(404).json({message: 'Client or Task not found'})
    }

    if (!client.assignedTasks.includes(taskId)) {
      client.assignedTasks.push(taskId)
      await client.save()
    }

    res.status(200).json(client)
  } catch (error) {
    res.status(500).json({message: 'Error adding task to client', error})
  }
})
router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const newClientData = {
      email: req.body.email,
      password: 'test',
      name: req.body.name,
      status: req.body.status,
      supervisors: req.body.supervisors,
      assignedTasks: [],
      assignedExercise: []
    }

    const newClient = new Client(newClientData)
    await newClient.save()

    res.status(201).json(newClient)
  } catch (error) {
    res.status(500).json({message: 'Error creating new client', error})
  }
})
router.post('/:clientId/exercises/:exerciseId', async (req, res) => {
  const {clientId, exerciseId} = req.params

  try {
    const client = await Client.findById(clientId)
    const exercise = await Exercise.findById(exerciseId)

    if (!client || !exercise) {
      return res.status(404).json({message: 'Client or Exercise not found'})
    }

    if (!client.assignedExercise.includes(exerciseId)) {
      client.assignedExercise.push(exerciseId)
      await client.save()
    }

    res.status(200).json(client)
  } catch (error) {
    res.status(500).json({message: 'Error adding exercise to client', error})
  }
})
router.get('/:clientId/tasks', async (req, res) => {
  try {
    const {clientId} = req.params
    if (!Types.ObjectId.isValid(clientId)) {
      return res.status(400).send('Invalid client ID')
    }

    const client = await Client.findById(clientId).populate('assignedTasks')
    if (!client) {
      return res.status(404).send('Client not found')
    }

    res.status(200).json(client.assignedTasks)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})
router.get('/:clientId/exercises', async (req, res) => {
  try {
    const {clientId} = req.params
    if (!Types.ObjectId.isValid(clientId)) {
      return res.status(400).send('Invalid client ID')
    }

    const client = await Client.findById(clientId).populate('assignedExercise')
    if (!client) {
      return res.status(404).send('Client not found')
    }

    res.status(200).json(client.assignedExercise)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

module.exports = router

/**
 * @openapi
 * /clients/{clientId}:
 *   get:
 *     summary: Retrieve a client by their ID
 *     description: Fetches a client by their ID along with their assigned tasks and exercises.
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: Unique ID of the client.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Client data retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Client not found.
 *       500:
 *         description: Error fetching client data.
 */
/**
 * @openapi
 * /clients/{clientId}/tasks/{taskId}:
 *   post:
 *     summary: Assign a task to a client
 *     description: Adds a task to a client's list of assigned tasks if it's not already assigned.
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: Unique ID of the client.
 *         schema:
 *           type: string
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: Unique ID of the task to assign.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task added to client successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Client or Task not found.
 *       500:
 *         description: Error adding task to client.
 */
/**
 * @openapi
 * /clients:
 *   post:
 *     summary: Create a new client
 *     description: Registers a new client with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *               status:
 *                 type: string
 *               supervisors:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: New client created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       500:
 *         description: Error creating new client.
 */
/**
 * @openapi
 * /clients/{clientId}/exercises/{exerciseId}:
 *   post:
 *     summary: Assign an exercise to a client
 *     description: Adds an exercise to a client's list of assigned exercises if it's not already assigned.
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: Unique ID of the client.
 *         schema:
 *           type: string
 *       - in: path
 *         name: exerciseId
 *         required: true
 *         description: Unique ID of the exercise to assign.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Exercise added to client successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Client or Exercise not found.
 *       500:
 *         description: Error adding exercise to client.
 */
