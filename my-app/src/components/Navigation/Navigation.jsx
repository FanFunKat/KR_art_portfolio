import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__box}>
        <a href="#LandingPage" className={styles.logo__box}>
          <div className={styles.logo}>
            <img className={styles.logo__img} src="image/example.svg" alt="logo image example" />
            <p className={styles.logo__name}>PhotoToTo</p>
          </div>
        </a>
        <nav className={styles.nav}>
          <ul className={styles.nav__items}>
            <li><a href="/" className={styles.nav__itemsLink}>Home</a></li>
            <li><a href="/gallery" className={styles.nav__itemsLink}>Gallery</a></li>
            <li><a href="/pricing" className={styles.nav__itemsLink}>Pricing</a></li>
            <li><a href="/contact" className={styles.nav__itemsLink}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

{/* <header class="header">
  <div class="header__box">
    <a href="#LandingPage" class="logo__box">
      <div class="logo">
        <img class="logo__img" src="./image/example.svg" alt="logo image example">
          <p class="logo__name">PhotoToTo</p>
      </div>
      <nav class="nav">
        <ul class="nav__items">
          <li class="nav__items--item"><a class="nav__item--link" href="#Examples">Examples</a></li>
          <li class="nav__items--item"><a class="nav__item--link" href="#Pricing">Pricing</a></li>
          <li class="nav__items--item basket"><a class="nav__item--link" href="#">Basket</a></li>
        </ul>
      </nav>
    </a>
  </div>
</header> */}