import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__box}>
        <NavLink to="/" className={styles.logo__box}>
          <div className={styles.logo}>
            <img className={styles.logo__img} src="/image/example.svg" alt="logo image example" />
            <p className={styles.logo__name}>PhotoToTo</p>
          </div>
        </NavLink>
        <nav className={styles.nav}>
          <ul className={styles.nav__items}>
            <li><NavLink to="/gallery" className={styles.nav__itemsLink}>Gallery</NavLink></li>
            <li><NavLink to="/pricing" className={styles.nav__itemsLink}>Pricing</NavLink></li>
            <li><NavLink to="/contact" className={styles.nav__itemsLink}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}