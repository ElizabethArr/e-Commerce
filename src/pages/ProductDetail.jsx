import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductById } from '../services/ProductServices';

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} product_name
 * @property {string} image
 * @property {string} description
 * // Agrega otras propiedades del producto según lo que devuelva tu API
 */

/**
 * Componente para mostrar el detalle de un producto
 * @returns {JSX.Element}
 */
const ProductDetail = () => {
  const { id } = useParams();

  /**
   * @type {[Product | null, React.Dispatch<React.SetStateAction<Product | null>>]}
   */
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      /** @type {Product} */
      const productData = await getProductById(id);
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <>
          <h1>{product.product_name}</h1>
          <img src={product.image} alt={product.product_name} />
          <p>{product.description}</p>
          <button disabled>Comprar</button> {/* Desactivado por ahora */}
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProductDetail;
