import api from "../api/config";

export const getAllCarts = async () => {
  const response = await api.get(`/carts`);
  return response.data.payload;
};

export const createCart = async (name, price) => {
  const response = await api.post(`/carts`, { name, price });
  return response.data;
};

export const getCartById = async (cartId) => {
  const response = await api.get(`/carts/${cartId}`);
  console.log(response);
  return response;
};

export const updateCartById = async (cartId, updatedProducts) => {
  const response = await api.put(`/carts/${cartId}`, {
    products: updatedProducts,
  });
  return response.data;
};

export const deleteAllProducts = async (cartId) => {
  const response = await api.delete(`/carts/${cartId}`);
  console.log(response);
  return response.data;
};

export const addProductToCart = async (cartId, productId, quantity) => {
  const response = await api.post(`/carts/${cartId}/products/${productId}`, {
    quantity,
  });
  return response.payload;
};

// Actualizar la cantidad de un producto en un carrito por ID
export const updateProductQuantity = async (cartId, productId, quantity) => {
  const response = await api.put(`/carts/${cartId}/products/${productId}`, {
    quantity,
  });
  return response.data;
};

// Eliminar un producto de un carrito por ID
export const deleteProductFromCart = async (cartId, productId, quantity) => {
  const response = await api.delete(`/carts/${cartId}/products/${productId}`, {
    data: { quantity },
  });
  console.log(response);
  return response.data;
};
