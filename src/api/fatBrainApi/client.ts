import axios from "axios"
import Cookies from "js-cookie";

const fatBrainClient = axios.create({
    baseURL: 'https://verduck.com',
    withCredentials: true,
})

fatBrainClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        // 리프레시 토큰으로 액세스 토큰 재발행
        try {
          const refreshToken = Cookies.get('tid')
          const response = await fatBrainClient.post('/v1/auth/token', { grantType: 'refresh_token', refreshToken: refreshToken });
  
          const { tokenType, accessToken } = response.data;

          console.log(accessToken)
  
          fatBrainClient.defaults.headers.common['Authorization'] = `${tokenType} ${accessToken}`;
          originalRequest.headers['Authorization'] = `${tokenType} ${accessToken}`;
  
          return fatBrainClient(originalRequest);
        } catch (refreshError) {
          // 리프레시 토큰도 만료된 경우 로그인 페이지로 리디렉션
          window.location.href = '/login'; // 로그인 페이지로 이동
        }
      }
      return Promise.reject(error);
    }
);

export default fatBrainClient