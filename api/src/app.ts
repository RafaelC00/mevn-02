const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
const morgan = require('morgan')
const url = `0.0.0.0:${port}`

app.use(cors())
app.use(morgan('dev'))

app.get('/', (req , res) => {
  res.send('Hello World!')
} )

app.listen(url, () => {
  console.log(`Example app listening on port ${port}`)
} )