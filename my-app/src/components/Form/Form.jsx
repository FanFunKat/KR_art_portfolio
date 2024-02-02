import { styles } from './Form.module.css'

export const Form = () => {
  return (
    <form >
      <div >
        <label htmlFor="title">Title:</label>
      </div>
      <div>
        <input
          type="text"
          id="title"
          name="title" />
      </div>
      <div >
        <label htmlFor="email">E-mail:</label>
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
      </div>
      <div>
        <textarea
          id="message"
          name="message"
        />
      </div>

      <button type="submit">Send</button>
    </form>
  )
}