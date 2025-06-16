// src/components/Item.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '1rem',
      textAlign: 'center',
      background: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h3 style={{ margin: '1rem 0 0.5rem 0' }}>{product.name}</h3>
      <p style={{ color: '#666', fontWeight: 'bold' }}>${product.price}</p>
      <Link
        to={`/item/${product.id}`}
        style={{
          display: 'inline-block',
          marginTop: '0.8rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none'
        }}
      >
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
