const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('dev'))

app.get('/', (req , res) => {
  res.send('Hello World!')
} )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
} )