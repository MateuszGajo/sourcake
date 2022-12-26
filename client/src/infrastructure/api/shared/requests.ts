import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

const requests = {
  get: <T>(url: string, opt = {}) => axios.get<T>(url, opt),
  post: <T>(url: string, body = {}) => axios.post<T>(url, body),
  put: <T>(url: string, body = {}) => axios.put<T>(url, body),
  delete: <T>(url: string) => axios.delete<T>(url),
};

export default requests;
