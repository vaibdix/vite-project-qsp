import styles from './Cart.module.css';

const Cart = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Shopping Cart ({cartItems.length} items)</h2>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <img src={item.images[0]} alt={item.title} className={styles.cartItemImage} />
          <div className={styles.cartItemDetails}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
      {cartItems.length > 0 ? (
        <div className={styles.cartTotal}>
          <h3>Total: ${calculateTotal()}</h3>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
