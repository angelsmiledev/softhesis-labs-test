import api from "@/lib/axios";
import type { User } from "@/types/User";

export default class AuthService {
  getUserInfo = async (email: string) => {
    try {
      const res = await api.get(`user?email=${email}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  updateUserProfile = async (user: User) => {
    try {
      const res = await api.put(`user`, {
        email: user.email,
        name: user.name,
        password: user.password,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
}
