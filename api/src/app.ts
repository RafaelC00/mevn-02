import express from 'express'

const env = require('dotenv').config({ path: '../development.env' });
const app = express()
const port = env.PORT || 3000;
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('dev'))

app.get('/', (req:express.Request , res:express.Response) => {
  res.send('Hello World!')
} )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
} )