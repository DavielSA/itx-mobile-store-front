import { useState } from 'react';
import { addToCart } from '../api/api';

export default function ProductActions({ product, onCartUpdate }) {
  const [color, setColor] = useState(product.options.colors[0]?.code);
  const [storage, setStorage] = useState(product.options.storages[0]?.code);

  const handleAdd = async () => {
    const res = await addToCart({ id: product.id, colorCode: color, storageCode: storage });
    onCartUpdate(res.count);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <label>
        Color:&nbsp;
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          {product.options.colors.map((c) => (
            <option key={c.code} value={c.code}>{c.name}</option>
          ))}
        </select>
      </label>
      <br /><br />
      <label>
        Almacenamiento:&nbsp;
        <select value={storage} onChange={(e) => setStorage(e.target.value)}>
          {product.options.storages.map((s) => (
            <option key={s.code} value={s.code}>{s.name}</option>
          ))}
        </select>
      </label>
      <br /><br />
      <button onClick={handleAdd} className="add-to-cart-btn">
        🛒 Añadir al carrito
      </button>
    </div>
  );
}