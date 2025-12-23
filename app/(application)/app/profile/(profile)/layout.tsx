"use client";

import ProfileTabs from "@/app/components/Application/Profile/ProfileTabs/ProfileTabs";
import ProfileUserline from "@/app/components/Application/Profile/ProfileUserline/ProfileUserline";
import { setRewards } from "@/app/lib/features/rewards/rewardsSlice";
import { setUser, setUserContracts } from "@/app/lib/features/user/userSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import {
  getCurrentUser,
  getUserContracts,
  getUserRewards,
} from "@/app/lib/utils/userService";
import { Activity, Award } from "lucide-react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const profileLinks = [
  {
    id: 1,
    name: "Journey",
    href: "/app/profile/journey",
    icon: <Award width={16} height={16} />,
  },
  {
    id: 2,
    name: "Activities",
    href: "/app/profile/activities",
    icon: <Activity width={16} height={16} />,
  },
];

const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useAppDispatch();

  const handleLoadUser = async () => {
    try {
      const data = await getCurrentUser();
      dispatch(setUser(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadRewards = async () => {
    try {
      const data = await getUserRewards();
      if (data?.data.length) {
        dispatch(setRewards(data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadContracts = async () => {
    try {
      const data = await getUserContracts();
      dispatch(setUserContracts(data.data));
    } catch (error: any) {
      toast.error("Error loading contracts: ", error.response.data.message);
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoadUser();
    handleLoadRewards();
    handleLoadContracts();
  }, []);

  return (
    <main className="max-w-4xl mx-auto">
      <ProfileUserline />
      <div className="mt-4 px-4">
        <ProfileTabs links={profileLinks} layoutId="profile-tab-navigation" />
      </div>
      <div className="mt-4">{children}</div>
    </main>
  );
};

export default page;
