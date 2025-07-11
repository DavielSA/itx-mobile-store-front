import React from 'react';

export default function Loading({ label = 'Cargando...' }) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <noscript>
        <p>{label}</p>
      </noscript>
    </div>
  );
}