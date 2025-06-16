// src/components/ItemDetail.jsx

import React from 'react';

const ItemDetail = ({ product }) => {
  return (
    <div style={{
      display: 'flex',
      gap: '2rem',
      alignItems: 'flex-start',
      background: '#fff',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '300px', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
      />

      <div style={{ flex: 1 }}>
        <h2>{product.name}</h2>
        <p style={{ color: '#555', margin: '1rem 0' }}>{product.description}</p>
        <h3 style={{ color: '#007bff' }}>${product.price}</h3>
        <p>Stock disponible: {product.stock}</p>

        {/* Acá más adelante podrías agregar el contador y botón "Agregar al carrito" */}
        <button
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1.2rem',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
