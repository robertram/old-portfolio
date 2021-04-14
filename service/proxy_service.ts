import axios from 'axios';

const TIMEOUT_IN_MILLIS = 25000;

export const proxyService = axios.create({
  timeout: TIMEOUT_IN_MILLIS,
});

proxyService.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.message?.toLowerCase().includes('timeout')) {
      return Promise.reject({
        msj: 'Dependency exceeded timeout',
      });
    }

    return Promise.reject(error);
  },
);