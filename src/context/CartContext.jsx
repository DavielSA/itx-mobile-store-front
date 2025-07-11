import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : [];
  });

  const [cartCount, setCartCount] = useState(() => cartItems.length);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartCount(cartItems.length);
  }, [cartItems]);

  const addItem = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);