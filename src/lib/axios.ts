import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError<{ message: string }>) => {
    let errorStatement: string = "";
    if (!error.response) {
      console.log(`Network error: ${error}`);
      errorStatement = error.message;
    } else {
      if (error.response) {
        const { status } = error.response;
        console.log(
          `HttpService::Error(${status}) : ${error.response.data.message}`
        );
        errorStatement = error.response.data.message;
      }
    }
    return Promise.reject(errorStatement);
  }
);

export default api;
