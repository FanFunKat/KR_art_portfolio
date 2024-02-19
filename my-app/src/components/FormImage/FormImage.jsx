import styles from './FormImage.module.css'

export const FormImage = () => {

  return (
    <form action="javascript:;" className={styles.product__card}>
      <input type="image" alt="cat" src="#" className={styles.form__img} />
      <div className={styles.form_card}>
        <div className={styles.form_information}>
          <button className={styles.form__closeBtn}><i className="fa-solid fa-xmark form-close"></i></button>
          <h2 className={styles.form__title}>Title</h2>
          <p className={styles.form__price}>$10</p>
          <span className={styles.form__hash}>#tag1</span>
          <span className={styles.form__hash}>#tag2</span>
          <span className={styles.form__hash}>#tag3</span>
        </div>
        <button type="submit" className={styles.form__buy}>Add to basket</button>
      </div>
    </form>
  )
}
