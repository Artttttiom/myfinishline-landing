"use client";

import LeaderboardSwiper from "@/app/components/LeaderboardSwiper/LeaderboardSwiper";
import { setUserChallenges } from "@/app/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { getUserChallenges } from "@/app/lib/utils/userService";
import { useEffect } from "react";
import { motion } from "motion/react";

const page = () => {
  const { challenges } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLoadChallenges = async () => {
    try {
      const data = await getUserChallenges();
      dispatch(setUserChallenges(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoadChallenges();
  }, []);

  if (challenges.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h2 className="font-bold text-2xl leading-8 text-[#09090B]">
        Leaderboard
      </h2>
      {challenges.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <LeaderboardSwiper challenges={challenges} />
        </motion.div>
      )}
    </section>
  );
};

export default page;
