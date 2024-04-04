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
