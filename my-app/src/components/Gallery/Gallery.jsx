import { useState, useEffect } from 'react';
import styles from './Gallery.module.css'

export const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  // const [currentImg, setCurrentImg] = useState(0);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch('/photo.json')
      .then(res => res.json())
      .then((gallery) => { setGallery(gallery) })
  }, [])


  return (
    <>
      {gallery && (
        <section className={styles.examples__box}>
          {gallery.map((image) => { return <img src={image.src} key={image.id} alt={image.title} className={styles.example__img} /> })}
        </section>
      )}
    </>
  )
}