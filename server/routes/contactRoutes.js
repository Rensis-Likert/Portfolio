
const express = require('express')
const rateLimit = require('express-rate-limit')

const {
  submitContactMessage,
} = require('../controllers/contactController')

const router = express.Router()

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: {
    error: 'Too many messages. Please try again later.',
  },
})

router.post('/', contactLimiter, submitContactMessage)

module.exports = router
