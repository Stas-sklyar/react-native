const express = require('express')
const router = express.Router()
const Exercise = require('../models/Exercise')

router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find()
    res.json(exercises)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newExercise = new Exercise(req.body)
    await newExercise.save()
    res.status(201).json(newExercise)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id)
    if (!exercise) {
      return res.status(404).send('Exercise not found')
    }
    res.json(exercise)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
