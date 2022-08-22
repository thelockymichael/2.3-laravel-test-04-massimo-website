import axios from "axios"
import store from "./store"

const axiosClient = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api' : 'http://165.22.29.71:80/api'
})

axiosClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`
  return config
})

export default axiosClient