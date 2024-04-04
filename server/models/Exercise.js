const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    questions: [String]
  },
  {timestamps: true}
)

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
