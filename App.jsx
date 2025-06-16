
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        {/* Ruta principal que muestra todos los productos */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Ruta para productos por categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Ruta para el detalle de un producto */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/* Ruta para error 404 */}
        <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '2rem' }}>404 - Página no encontrada</h2>} />
      </Routes>
    </div>
  );
};

export default App;
