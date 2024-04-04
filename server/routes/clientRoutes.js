const Client = require('../models/Client')
const Task = require('../models/Task')
const express = require('express')
const router = express.Router()

router.get('/clients/:clientId', async (req, res) => {
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

router.post('/clients/:clientId/tasks/:taskId', async (req, res) => {
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

router.post('/clients', async (req, res) => {
  try {
    const newClientData = {
      email: req.body.email,
      password: req.body.password,
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

router.post('/clients/:clientId/exercises/:exerciseId', async (req, res) => {
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

module.exports = router
