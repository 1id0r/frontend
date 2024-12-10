import { useState } from 'react'
import emailjs from '@emailjs/browser'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  // Email validation
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  }

  // Form validation
  const validateForm = () => {
    const newErrors = {}

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters'
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setStatus('sending')

    const templateParams = {
      to_name: 'Lidor',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    try {
      await emailjs.send('service_s3qhymc', 'template_3dp13tg', templateParams, 'P2Affzye293NeONIo')

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
    setIsSubmitting(false)
  }

  return (
    <section className='contact'>
      <div className='contact-content'>
        <h2 className='section-title'>Contact</h2>
        <p className='contact-intro'>Feel free to reach out for collaborations or just a friendly hello</p>

        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-row'>
            <div className='input-group'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                className={`form-input ${errors.name ? 'error' : ''}`}
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value })
                  if (errors.name) setErrors({ ...errors, name: '' })
                }}
              />
              {errors.name && <span className='error-message'>{errors.name}</span>}
            </div>

            <div className='input-group'>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                className={`form-input ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  if (errors.email) setErrors({ ...errors, email: '' })
                }}
              />
              {errors.email && <span className='error-message'>{errors.email}</span>}
            </div>
          </div>

          <div className='input-group'>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              className={`form-input full ${errors.subject ? 'error' : ''}`}
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value })
                if (errors.subject) setErrors({ ...errors, subject: '' })
              }}
            />
            {errors.subject && <span className='error-message'>{errors.subject}</span>}
          </div>

          <div className='input-group'>
            <textarea
              name='message'
              placeholder='Message'
              className={`form-input full ${errors.message ? 'error' : ''}`}
              rows='6'
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value })
                if (errors.message) setErrors({ ...errors, message: '' })
              }}
            />
            {errors.message && <span className='error-message'>{errors.message}</span>}
          </div>

          <button type='submit' className={`send-btn ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
            {status === 'sending' ? <span className='loader'></span> : 'Send Message'}
          </button>

          {status === 'success' && <div className='status-message success'>Message sent successfully! ✨</div>}
          {status === 'error' && <div className='status-message error'>Failed to send message. Please try again.</div>}
        </form>
      </div>
    </section>
  )
}
