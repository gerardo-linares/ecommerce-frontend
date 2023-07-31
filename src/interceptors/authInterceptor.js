import api from "../api/config";

export const authInterceptor = () => {
  const updateHeaders = (request) => {
    const newHeaders = {
      "Content-Type": "application/json",
      credentials: "include",
    };

    request.headers = newHeaders;
    request.withCredentials = true;
    return request;
  };

  api.interceptors.request.use((request) => {
    return updateHeaders(request);
  });

  api.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
