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
