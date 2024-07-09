import api from "@/lib/axios";
import type { User } from "@/types/User";

class AuthService {
  login = async (payload: Omit<User, "name">) => {
    try {
      const {
        data: { accessToken },
      } = await api.post("/auth", payload);
      if (accessToken) this.setAccessToken(accessToken);
      return true;
    } catch (err) {
      alert(err);
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

export const authService = new AuthService();

export default authService;
