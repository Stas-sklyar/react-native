const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.json(tasks)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newTask = new Task(req.body)
    await newTask.save()
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API for managing tasks
 *
 * /tasks:
 *   get:
 *     tags: [Tasks]
 *     summary: Get all tasks
 *     description: Retrieve a list of all tasks stored in the database.
 *     responses:
 *       200:
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *         description: Server error when retrieving tasks.
 *
 *   post:
 *     tags: [Tasks]
 *     summary: Create a new task
 *     description: Create a new task with the data provided in the request body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Task created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Error creating the task.
 */
