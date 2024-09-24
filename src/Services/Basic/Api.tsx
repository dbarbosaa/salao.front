import axios from "axios";

import StorageUtils from "../../utils/StorageUtils";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: true,
});

api.interceptors.request.use(

  async (config: any) => {
    if (config.url.toLowerCase().indexOf("autenticacao") < 0 && config.url.toLowerCase().indexOf("refreshtoken") < 0) {
      if (new Date().getTime() > StorageUtils.getAccessExpireIn()) {
        return {
          ...config,
          cancelToken: new axios.CancelToken((cancel) => cancel("Sessão Expirada")),
        };
      }
    }

    await StorageUtils.updateAccessExpireIn();

    if (config.url.toLowerCase().indexOf("refreshtoken") >= 0) {
      delete config.headers.Authorization;
      delete config.headers.common["Authorization"];
    } 

    return config;
  },
  (err: any) => Promise.reject(err)
);

api.interceptors.response.use(response => response, error => {
  if (error.response && error.response.status === 401) { // Assuming 401 for unauthorized
    window.location.replace(`${import.meta.env.BASE_URL}`);
  }
  return Promise.reject(error);
});

export default api;
