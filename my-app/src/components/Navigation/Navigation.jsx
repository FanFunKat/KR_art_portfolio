import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__box}>
        <a href="/" className={styles.logo__box}>
          <div className={styles.logo}>
            <img className={styles.logo__img} src="/image/example.svg" alt="logo image example" />
            <p className={styles.logo__name}>PhotoToTo</p>
          </div>
        </a>
        <nav className={styles.nav}>
          <ul className={styles.nav__items}>
            <li><a href="/gallery" className={styles.nav__itemsLink}>Gallery</a></li>
            <li><a href="/pricing" className={styles.nav__itemsLink}>Pricing</a></li>
            <li><a href="/contact" className={styles.nav__itemsLink}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}