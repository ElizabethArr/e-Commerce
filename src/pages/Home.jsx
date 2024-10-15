import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/ProductServices';
import NavBar from '../components/NavBar';

/**
 * @typedef {Object} Product
 * @property {string} _id
 * @property {string} product_name
 * @property {string} image
 * @property {string} description
 */

/**
 * El componente principal de la página de inicio
 */
const Home = () => {
  /**
   * @type {[Product[], React.Dispatch<React.SetStateAction<Product[]>>]}
   */
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      /** @type {Product[]} */
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => 
    product.product_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar onSearch={setSearch} />
      <div className="products-list">
        {filteredProducts.map(product => (
          <div key={product._id} className="product-card">
            <h3>{product.product_name}</h3>
            <img src={product.image} alt={product.product_name} />
            <p>{product.description}</p>
            <a href={`/product/${product._id}`}>Ver Detalle</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
