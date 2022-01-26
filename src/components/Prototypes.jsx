import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';
import styles from './Prototypes.module.css';

// const ddd = useContext(AppStateContext);

const Prototypes = () => {
  return (
    <main>
      <ul className={styles['prototypes']}>
        {prototypes.map((prototype) => {
          const { id, title, artist, desc, thumbnail, price, pieUrl } = prototype;
          return <li className={styles['prototype']} key={id}>
            <a href={pieUrl} target='_blank'>
              <div className={styles['prototype__artwork__wrap']}>
                <video
                  className={`${styles['prototype__artwork']} ${styles['prototype__edit']}`}
                  src={thumbnail}
                  autoPlay loop playsInline></video>
              </div>
            </a>

            <div className={styles['prototype__body']}>
              <div className={styles['prototype__title']}>
                <div className={`${styles['btn']} ${styles['btn--primary']} ${styles['float--right']}`}>
                  <i className={`${styles['icon']} ${styles['icon--plus']}`}></i>
                </div>
                {title}
              </div>

              <p className={styles['prototype__price']}>$ {price}</p>
              <p className={styles['prototype__desc']}>{desc}</p>
            </div>
          </li>
        })}
      </ul>
    </main>
  );
};

export default Prototypes;