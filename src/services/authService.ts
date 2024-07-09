import api from "@/lib/axios";
import type { User } from "@/types/User";

export default class AuthService {
  login = async (payload: Omit<User, "name">) => {
    try {
      const res = await api.post("/auth", payload);
      if (res.data.accessToken) {
        this.setAccessToken(res.data.accessToken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  setAccessToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
  };

  isAuthorized = () => {
    return !!localStorage.getItem("accessToken");
  };

  logout = () => {
    localStorage.removeItem("accessToken");
  };

  getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };
}
