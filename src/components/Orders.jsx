import styles from './Orders.module.css';
import React, { useMemo } from 'react';
import useOrders from '../hooks/useOrders';
import usePrototypes from '../hooks/usePrototypes';
import useActions from '../hooks/useActions';

const Orders = () => {
  const orders = useOrders();
  const prototypes = usePrototypes();
  const { remove, removeAll } = useActions();

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);

  // 상품이 아무것도 선택되지 않은 상태일 때
  if (orders.length === 0) {
    return (
      <aside>
        <div className={styles['empty']}>
          <div className={styles['title']}>You don't have any orders</div>
          <div className={styles['subTitle']}>Click on a + to add an order</div>
        </div>
      </aside>
    );
  }

  // 선택된 상품이 있을 때
  return <aside>
    <div className={styles['order']}>
      <div className={styles['body']}>
        {orders.map((order) => {
          const { id } = order;
          const prototype = prototypes.find(p => p.id === id);
          const click = () => {
            remove(id);
          }

          return <div className={styles['item']} key={id}>
            <div className={styles['img']}>
              <video src={prototype.thumbnail}></video>
            </div>
            <div className={styles['content']}>
              <p className={styles['title']}>
                {prototype.title} x {order.quantity}
              </p>
            </div>
            <div className={styles['action']}>
              <p className={styles['price']}>
                $ {prototype.price * order.quantity}
              </p>
              <button
                className='btn btn--link'
                onClick={click}
              >
                <i className='icon icon--cross'></i>
              </button>
            </div>
          </div>
        })}
      </div>

      <div className={styles['total']}>
        <hr />
        <div className={styles['item']}>
          <div className={styles['content']}>Total</div>
          <div className={styles['action']}>
            <div className={styles['price']}>$ {totalPrice}</div>
          </div>
          <button className='btn btn--link' onClick={removeAll}>
            <i className='icon icon--delete'></i>
          </button>
        </div>
        <button className='btn btn--secondary btn--checkout'>Checkout</button>
      </div>
    </div>
  </aside >
};

export default Orders;