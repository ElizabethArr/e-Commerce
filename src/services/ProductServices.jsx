// const API_URL = 'https://ecomerce-master.herokuapp.com/api/v1';

// export const getProducts = async () => {
//   const response = await fetch(`${API_URL}/item`);
//   return response.json();
  
// };

// export const getProductById = async (id) => {
//     const response = await fetch(`${API_URL}/item/${id}`);
//     return response.json();
//   };
  

const API_URL = 'https://ecomerce-master.herokuapp.com/api/v1';

// Función para obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/item`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
  }
};


// Función para obtener un producto por ID
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/item/${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error al obtener el producto con ID ${id}:`, error);
  }
};
