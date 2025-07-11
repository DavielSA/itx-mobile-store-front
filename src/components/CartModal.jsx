import { useCart } from '../context/CartContext';

export default function CartModal({ onClose }) {
  const { cartItems } = useCart();

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={onClose}
        aria-label="Cerrar modal"
        tabIndex={-1}
      />

      <div className="modal-content" role="dialog" aria-modal="true">
        <button
          onClick={onClose}
          className="modal-close"
          aria-label="Cerrar carrito"
        >
          ×
        </button>
        <h2 className="modal-title">🛒 Productos en el carrito</h2>

        {cartItems.length === 0 ? (
          <p className="modal-empty">El carrito está vacío.</p>
        ) : (
          <ul className="modal-list">
            {cartItems.map((item, index) => (
              <li key={index} className="modal-list-item">
                <div><strong>ID:</strong> {item.id}</div>
                <div><strong>Color:</strong> {item.colorCode}</div>
                <div><strong>Almacenamiento:</strong> {item.storageCode}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}