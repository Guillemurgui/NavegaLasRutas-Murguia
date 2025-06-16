// src/containers/ItemListContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProducts, getProductsByCategory } from '../data/products';
import Item from '../components/Item';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [categoryId]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>
        {categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
