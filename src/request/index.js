import axios from "axios";
import { useCookies } from "@vueuse/integrations";
import router from "@/router";
import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: 'http://localhost:8080'
});
request.interceptors.request.use(config => {
  if (config.url.indexOf('security/ligin') !== -1) {
    return config;
  }
  const cookie = useCookies();
  const token = cookie.get('jwt-token');
  if (token) {
    config.headers.Authorization = token;
  } else {
    router.push('/login');
  }
}, error => {
  if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    ElMessage.error('请求超时');
  } else {
    ElMessage.error(error.message);
  }
  return Promise.reject(error);
})

export default request;