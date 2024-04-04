const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to the Express app!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
