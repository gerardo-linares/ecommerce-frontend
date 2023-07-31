import api from "../api/config";

export const loginUser = async (user) => {
  const response = await api.post("/auth/login", user);
  const data = response;
  console.log(data);
  return data;
};

export const registerUser = async (user) => {
  const response = await api.post("/auth/register", user);

  const data = response;
  return data;
};

export const logoutUser = async () => {
  const response = await api.post("/auth/logout");
  return response;
};

export const profileUser = async () => {
  const response = await api.get("/auth/current");
  const data = response.payload;
  return data;
};
