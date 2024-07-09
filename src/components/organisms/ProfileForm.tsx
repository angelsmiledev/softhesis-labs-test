"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/redux/store";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import { updateProfile } from "@/lib/redux/userSlice";
import { userService, authService } from "@/services";

export const ProfileForm: SLComponent = () => {
  const user = useAppSelector((state) => state.user);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isUpdated = await userService.updateUserProfile({
      email,
      name,
      password,
    });
    // Refresh token
    const isRefresh = await authService.login({ email, password });
    if (isUpdated && isRefresh) {
      dispatch(updateProfile({ name, email }));
      alert("Profile updated successfully");
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
        disabled
        required
      />
      <FormField
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <FormField
        label="New Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Update Profile</Button>
    </form>
  );
};

export default ProfileForm;
