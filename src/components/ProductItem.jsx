import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductItem({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        cursor: 'pointer',
      }}
    >
      <img src={product.imgUrl} alt={product.model} width="100%" />
      <h3>{product.brand}</h3>
      <p>{product.model}</p>
      <strong>{product.price}€</strong>
    </div>
  );
}