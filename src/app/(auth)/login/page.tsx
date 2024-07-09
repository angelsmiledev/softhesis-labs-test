import type { NextPage } from "next";
import LoginForm from "@/components/organisms/LoginForm";

const LoginPage: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
