import { Link } from 'react-router-dom';
import styles from './FormImage.module.css'
import { useOutletContext, useParams } from 'react-router';

export const FormImage = () => {

  let { id } = useParams();
  const gallery = useOutletContext();
  const selectedImage = gallery.find(image => image.id == id);

  if (!selectedImage) {
    return <div>Loading...</div>;
  }

  // console.log(selectedImage);

  return (
    <section className={styles.product__background}>
      <form className={styles.product__card}>
        <input type="image" alt={selectedImage.title} src={selectedImage.src} key={selectedImage.id} className={styles.form__img} />
        <div className={styles.form_card}>
          <div className={styles.form_information}>
            <Link to='/gallery' className={styles.form__closeBtn}><i className="fa-solid fa-xmark form-close"></i></Link>
            <h2 className={styles.form__title}>{selectedImage.title}</h2>
            <p className={styles.form__price}>${selectedImage.price}</p>
            <span className={styles.form__hash}>{selectedImage.tag1}</span>
            <span className={styles.form__hash}>{selectedImage.tag2}</span>
            <span className={styles.form__hash}>{selectedImage.tag3}</span>
          </div>
          <Link to='/gallery' type="submit" className={styles.form__buy}>Add to basket</Link>
        </div>
      </form>
    </section>
  )
}
