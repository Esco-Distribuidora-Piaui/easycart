import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
