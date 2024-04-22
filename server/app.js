const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoutes')
const exerciseRoutes = require('./routes/exerciseRoutes')
const clientRoutes = require('./routes/clientRoutes')
const swaggerUi = require('swagger-ui-express')

const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple CRUD API application'
    }
  },
  apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJsdoc(options)

const mongoDBUri =
  'mongodb+srv://stassklyardev:hzghlyNBUPB5Xddr@cluster0.6gn2azo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoDBUri, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected successfully to MongoDB')
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/tasks', taskRoutes)
app.use('/exercises', exerciseRoutes)
app.use('/clients', clientRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to the Express app!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
