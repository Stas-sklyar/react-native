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

/**
 * @swagger
 * tags:
 *   name: Exercises
 *   description: API for managing exercises
 *
 * /exercises:
 *   get:
 *     tags: [Exercises]
 *     summary: Get all exercises
 *     description: Retrieve a list of all exercises stored in the database.
 *     responses:
 *       200:
 *         description: A list of exercises.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/server/components/schemas/Exercise.json'
 *       500:
 *         description: Server error
 *
 *   post:
 *     tags: [Exercises]
 *     summary: Create a new exercise
 *     description: Create a new exercise with the data provided in the request body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/server/components/schemas/Exercise.json'
 *     responses:
 *       201:
 *         description: Exercise created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/server/components/schemas/Exercise.json'
 *       500:
 *         description: Error creating the exercise.
 *
 * /exercises/{id}:
 *   get:
 *     tags: [Exercises]
 *     summary: Get a single exercise
 *     description: Retrieve detailed information about an exercise specified by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique identifier of the exercise.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detailed information about the exercise.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/server/components/schemas/Exercise.json'
 *       404:
 *         description: Exercise not found.
 *       500:
 *         description: Server error
 */
