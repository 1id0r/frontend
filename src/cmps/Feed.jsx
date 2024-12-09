import { useState } from 'react'
import md5 from 'md5'

export function Feed() {
  const [comments, setComments] = useState([])
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  })
  const [filterText, setFilterText] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const newComment = {
      id: Date.now(),
      email: formData.email,
      message: formData.message,
      gravatarUrl: `https://www.gravatar.com/avatar/${md5(formData.email.toLowerCase().trim())}?d=identicon`,
    }
    setComments((prevComments) => [newComment, ...prevComments])
    setFormData({ email: '', message: '' })
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const filteredComments = comments.filter(
    (comment) =>
      comment.message.toLowerCase().includes(filterText.toLowerCase()) ||
      comment.email.toLowerCase().includes(filterText.toLowerCase())
  )

  return (
    <section className='feed'>
      <div className='feed-form'>
        <form onSubmit={handleSubmit}>
          <div className='form-inputs'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              required
              className='email-input'
            />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Message'
              required
              className='message-input'
            />
          </div>
          <button type='submit' className='submit-btn'>
            SUBMIT
          </button>
        </form>
      </div>

      <div className='feed-filter'>
        <input
          type='text'
          placeholder='Filter'
          value={filterText}
          onChange={(ev) => setFilterText(ev.target.value)}
          className='filter-input'
        />
      </div>

      <div className='comments-list'>
        {filteredComments.map((comment) => (
          <article key={comment.id} className='comment-item'>
            <img src={comment.gravatarUrl} alt='user avatar' className='comment-avatar' />
            <div className='comment-content'>
              <p className='comment-email'>{comment.email}</p>
              <p className='comment-message'>{comment.message}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
