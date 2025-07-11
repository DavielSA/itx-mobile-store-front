import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import CartModal from './CartModal';

export default function Header() {
  const { cartCount } = useCart();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const getBreadcrumb = () => {
    if (location.pathname === '/') return 'Inicio';
    if (location.pathname.startsWith('/product/')) return 'Detalles del producto';
    return '';
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo">
            📱 ITX Store
          </Link>
          <span className="breadcrumb">/ {getBreadcrumb()}</span>
        </div>
        <div
          onClick={() => setShowModal(true)}
          className="cart-button"
          aria-label="Abrir carrito"
        >
          🛒 Carrito: <strong>{cartCount}</strong>
        </div>
      </header>

      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </>
  );
}