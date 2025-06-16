
// Array de productos simulados
const products = [
  {
    id: '1',
    name: 'Remera Oversize Blanca',
    price: 9500,
    category: 'remeras',
    description: 'Remera de algodón oversize blanca 100% premium',
    stock: 10,
    image: 'https://via.placeholder.com/200x250?text=Remera+Blanca'
  },
  {
    id: '2',
    name: 'Buzo Hoodie Negro',
    price: 17900,
    category: 'buzos',
    description: 'Buzo hoodie negro, ideal para invierno',
    stock: 7,
    image: 'https://via.placeholder.com/200x250?text=Buzo+Negro'
  },
  {
    id: '3',
    name: 'Pantalón Jogger Beige',
    price: 12500,
    category: 'pantalones',
    description: 'Jogger beige con puños ajustables y bolsillos',
    stock: 5,
    image: 'https://via.placeholder.com/200x250?text=Jogger+Beige'
  },
  {
    id: '4',
    name: 'Remera Oversize Negra',
    price: 9500,
    category: 'remeras',
    description: 'Remera de algodón oversize negra 100% premium',
    stock: 12,
    image: 'https://via.placeholder.com/200x250?text=Remera+Negra'
  }
];

// Simulación de retardo (promesa)
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); // 1 segundo de retardo
  });
};

// Obtener un solo producto por ID
export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === id);
      resolve(product);
    }, 1000);
  });
};

// Obtener productos filtrados por categoría
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter((prod) => prod.category === categoryId);
      resolve(filtered);
    }, 1000);
  });
};
