"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/store";
import { decodeToken } from "@/lib/jwt";
import authService from "@/services/authService";
import { login, logout } from "@/lib/redux/userSlice";

const AuthProvider: SLComponent = ({ children }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authService.getAccessToken()) {
      const { email, name, _, exp } = decodeToken(
        `${authService.getAccessToken()}`
      ) as any;

      // Check if token is expired
      if (Math.floor(new Date().getTime() / 1000) >= exp) {
        authService.logout();
        dispatch(logout());
        router.push("/");
      } else {
        dispatch(login({ email, name }));
      }
    } else {
      dispatch(logout());
      router.push("/");
    }
  }, [router, dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
