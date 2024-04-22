const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const clientSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  password: {type: String, required: true},
  status: String,
  supervisors: [
    {
      name: String
    }
  ],
  assignedTasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    }
  ],
  assignedExercise: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise'
    }
  ]
})

clientSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8)
  }
  next()
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client

/**
 * @swagger
 * components:
 *   schemas:
 *     Client:
 *       type: object
 *       required:
 *         - email
 *         - name
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The client's email address, which must be unique.
 *         name:
 *           type: string
 *           description: The client's full name.
 *         password:
 *           type: string
 *           format: password
 *           description: The client's hashed password for authentication.
 *         status:
 *           type: string
 *           description: Current status of the client.
 *         supervisors:
 *           type: array
 *           description: List of supervisors assigned to the client.
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the supervisor.
 *         assignedTasks:
 *           type: array
 *           description: Array of task IDs assigned to the client.
 *           items:
 *             type: string
 *             format: uuid
 *             description: Unique identifier of a task.
 *         assignedExercise:
 *           type: array
 *           description: Array of exercise IDs assigned to the client.
 *           items:
 *             type: string
 *             format: uuid
 *             description: Unique identifier of an exercise.
 */
