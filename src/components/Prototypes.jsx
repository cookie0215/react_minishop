import styles from './Prototypes.module.css';
import usePrototypes from '../hooks/usePrototypes';
import useActions from '../hooks/useActions';


const Prototypes = () => {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();
  return (
    <main>
      <ul className={styles['prototypes']}>
        {prototypes.map((prototype) => {
          const { id, title, artist, desc, thumbnail, price, pieUrl } = prototype;
          const click = () => {
            addToOrder(id);
          }

          return <li className={styles['prototype']} key={id}>
            <a href={pieUrl} target='_blank' rel="noreferrer">
              <div className={styles['prototype__artwork__wrap']}>
                <video
                  className={`${styles['prototype__artwork']} ${styles['prototype__edit']}`}
                  src={thumbnail}
                  autoPlay loop playsInline></video>
              </div>
            </a>

            <div className={styles['prototype__body']}>
              <div className={styles['prototype__title']}>
                <div
                  className='btn btn--primary float--right'
                  onClick={click}
                >
                  <i className='icon icon--plus'></i>
                </div>
                {title}
              </div>

              <p className={styles['prototype__price']}>$ {price}</p>
              <p className={styles['prototype__desc']}>{desc}</p>
            </div>
          </li>
        })}
      </ul>
    </main >
  );
};

export default Prototypes;