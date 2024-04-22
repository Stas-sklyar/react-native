const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '2.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple CRUD API application'
    }
  },
  apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJsdoc(options)

module.exports = swaggerSpec
