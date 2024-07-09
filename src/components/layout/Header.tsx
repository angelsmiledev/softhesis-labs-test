"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/lib/redux/store";
import { logout } from "@/lib/redux/userSlice";
import authService from "@/services/authService";

const Header: SLComponent = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          Softhesis Labs
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="mr-4">
                Dashboard
              </Link>
              <Link href="/profile" className="mr-4">
                Profile
              </Link>
              <Link
                href="/"
                onClick={() => {
                  dispatch(logout());
                  authService.logout();
                }}
              >
                Logout
              </Link>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
