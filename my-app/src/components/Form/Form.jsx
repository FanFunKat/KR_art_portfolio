import styles from './Form.module.css'

export const Form = () => {
  return (
    <form className={styles.form__card}>
      <div className={styles.form__inputName}>
        <label htmlFor="title">Title:</label>
      </div>
      <div>
        <input
          className={styles.form__input}
          type="text"
          id="title"
          name="title"
        />
        <div className={styles.error}></div>
      </div>

      <div className={styles.form__inputName}>
        <label htmlFor="email">E-mail:</label>
      </div>
      <div>
        <input
          className={styles.form__input}
          type="email"
          id="email"
          name="email"
        />
        <div className={styles.error}></div>
      </div>

      <div className={styles.form__inputName}>
        <label htmlFor="message">Message:</label>
      </div>
      <div>
        <textarea
          className={styles.form__input}
          id="message"
          name="message"
        />
        <div className={styles.error}></div>
      </div>

      <button className={styles.form__btn} type="submit">Send</button>
    </form>
  )
}