import type { NextPage } from "next";
import ProfileForm from "@/components/organisms/ProfileForm";

const ProfilePage: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Update Profile</h1>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
