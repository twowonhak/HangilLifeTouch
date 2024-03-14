import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8083/api', headers: {
    "Content-Type": "application/json; charset=utf-8",
  }, timeout: 10000,
});

const axiosUtil = Object.freeze({
  get: (url, param) => {
    return axiosInstance
        .get(url,
            {params: param, withCredentials: true})
        .then((res) => {
          console.debug(res);
          if (res.data) return res.data;
        })
        .catch((error) => {
          console.error(error)
        });
  },

  post: (url, param = {}) => {
    return axiosInstance
        .post(url,
            param,
            {withCredentials: true})
        .then((res) => {
          console.debug(res);
          if (res.data)
            return res.data;
        })
        .catch((error) => {
          console.error(error)
        })
  },

  formSubmit: (url, formData) => {
    return axiosInstance
        .post(url,
            formData,
            {
              headers: {"Content-Type": "multipart/form-data",}, withCredentials: true
            })
        .then((res) => {
          console.debug(res);
          if (res.data)
            return res.data;
        })
        .catch((error) => {
          console.error(error)
        })
  },
});

export default axiosUtil;