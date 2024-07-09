import api from "@/lib/axios";
import type { User } from "@/types/User";

class UserService {
  getUserInfo = async (email: string) => {
    try {
      const res = await api.get(`user?email=${email}`);
      return res.data;
    } catch (err) {
      alert(err);
    }
  };

  updateUserProfile = async (user: User) => {
    try {
      await api.put(`user`, {
        email: user.email,
        name: user.name,
        password: user.password,
      });
      return true;
    } catch (err) {
      alert(err);
    }
  };
}

const userService = new UserService();

export default userService;
