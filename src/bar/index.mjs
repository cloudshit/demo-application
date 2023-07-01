import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('combined'))
app.get('/bar/health', (req, res) => {
  res.send('Ok')
})

app.get('/bar/hello', (req, res) => {
  res.send('Hello, bar')
})

app.listen(8080)
