require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const contactRoutes = require('./routes/contactRoutes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(helmet())

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}))

app.use(express.json({ limit: '10kb' }))

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio API is running',
  })
})

app.use('/api/contact', contactRoutes)

app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      error: 'Invalid JSON request.',
    })
  }

  console.error('Unhandled server error:', err.message)

  return res.status(500).json({
    error: 'An unexpected error occurred.',
  })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
