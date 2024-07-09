"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import { RootState } from "@/lib/redux/store";
import { updateProfile } from "@/lib/redux/userSlice";

const ProfileForm: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // dispatch(updateProfile({ name, email, password }));
    alert("Profile updated successfully");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <FormField
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        label="New Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Update Profile</Button>
    </form>
  );
};

export default ProfileForm;
