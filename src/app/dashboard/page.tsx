"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

export default function DashboardPage() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {user.name}!</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
