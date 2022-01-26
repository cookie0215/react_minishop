import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles["header__container"]}>
        <div className={styles["title"]}>Stories in Scribbles</div>
        <div className={styles["subtitle"]}>
          Dinotaeng pursues to be a living brand that creates stories by communicating inspirations from animals, nature and everyday objects with people who love our brand.
        </div>
        <div className={styles["btn__area"]}>
          <a href="#" target='_blank'>
            <button>Dinotaeng Everywhere!</button>
          </a>
        </div>
      </div>
    </header >
  );
};

export default Header;