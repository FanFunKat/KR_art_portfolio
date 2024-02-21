import { useState, useEffect } from 'react';
import styles from './Gallery.module.css'
import { useNavigate, Outlet } from 'react-router';

export const Gallery = () => {
  const [gallery, setGallery] = useState();
  // const [currentImg, setCurrentImg] = useState(0);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch('/photo.json')
      .then(res => res.json())
      .then((gallery) => { setGallery(gallery) })
  }, [])

  const navigate = useNavigate();

  const handleClick = (image) => {
    navigate(`${image.id}`);
  };

  return (
    <>
      {gallery && (
        <section className={styles.examples__box}>
          {gallery.map((image) => { return <img src={image.src} key={image.id} alt={image.title} className={styles.example__img} onClick={() => handleClick(image)} /> })}
          <div>
            <Outlet context={gallery} />
          </div>
        </section>
      )}
    </>
  )
}