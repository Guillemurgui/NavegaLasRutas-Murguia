// src/containers/ItemDetailContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProductById } from '../data/products';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((res) => setProduct(res))
      .catch((err) => console.error(err));
  }, [itemId]);

  return (
    <div style={{ padding: '2rem' }}>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p style={{ textAlign: 'center' }}>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
