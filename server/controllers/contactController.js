
const supabase = require('../lib/supabaseClient')

async function submitContactMessage(req, res) {
  const { name, email, message } = req.body || {}

  // Validate input on the server, not only in React.
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return res.status(400).json({
      error: 'Please provide a valid name, email and message.',
    })
  }

  const cleanName = name.trim()
  const cleanEmail = email.trim()
  const cleanMessage = message.trim()

  if (
    cleanName.length < 1 ||
    cleanName.length > 100 ||
    cleanEmail.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
    cleanMessage.length < 1 ||
    cleanMessage.length > 5000
  ) {
    return res.status(400).json({
      error: 'Please check your details and try again.',
    })
  }

  try {
    const { error } = await supabase
      .from('contact_messages')
      .insert({
        name: cleanName,
        email: cleanEmail,
        message: cleanMessage,
      })

    if (error) {
      console.error('Supabase insert failed:', error.message)

      return res.status(500).json({
        error: 'Unable to save your message right now.',
      })
    }

    return res.status(201).json({
      message: 'Your message has been received.',
    })
  } catch (error) {
    console.error('Contact submission failed:', error.message)

    return res.status(500).json({
      error: 'Something went wrong. Please try again later.',
    })
  }
}

module.exports = { submitContactMessage }
