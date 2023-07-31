import api from "../api/config";

export const getProducts = async (page, category, sort, limit) => {
  const response = await api.get("/products", {
    params: { page, category, sort, limit },
  });
  console.log(response);
  const data = response.payload.products;
  return data;
};

export const getProductById = async (pid) => {
  const response = await api.get(`/products/${pid}`);
  const data = response.payload.product;
  return data;
};

export const addProduct = async (productData) => {
  const response = await api.post(`/products`, productData);
  const data = response.payload;
  return data;
};

export const updateProduct = async (pid, productData) => {
  const response = await api.put(`/products/${pid}`, productData);
  const data = response;
  return data;
};

export const deleteProduct = async (pid) => {
  return await api.delete(`/products/${pid}`);
};
