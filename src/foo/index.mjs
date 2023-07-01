import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('combined'))
app.get('/foo/health', (req, res) => {
  res.send('Ok')
})

app.get('/foo/hello', (req, res) => {
  res.send('Hello, foo')
})

app.listen(8080)
