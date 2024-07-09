"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/store";
import { login } from "@/lib/redux/userSlice";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import authService from "@/services/authService";
import userService from "@/services/userService";

const LoginForm: SLComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isLoggedIn = await authService.login({ email, password });
    if (isLoggedIn) {
      const { name } = await userService.getUserInfo(email);
      dispatch(login({ email, name }));
      router.push("/dashboard");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <FormField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
