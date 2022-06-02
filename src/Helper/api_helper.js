import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://moveon-api-server.sbox.ali2bd.net/api/v1",
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}
