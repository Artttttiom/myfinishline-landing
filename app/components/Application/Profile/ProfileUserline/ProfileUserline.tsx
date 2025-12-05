"use client";

import useGetStravaUser from "@/app/hooks/useGetStravaUser";
import { Camera } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

const ProfileUserline = () => {
  const { athlete, isLoading } = useGetStravaUser();

  return (
    <section className="flex justify-between">
      <div className="flex items-center gap-4">
        {athlete?.profile ? (
          <Image
            className="rounded-full"
            src={athlete.profile}
            width={80}
            height={80}
            quality={75}
            loading="eager"
            alt="Profile image"
          />
        ) : isLoading ? (
          <div className="w-20 h-20 rounded-full animate-pulse-shimmer"></div>
        ) : (
          <div className="border-border shrink-0 border-2 rounded-full w-20 h-20 flex items-center justify-center shadow-inner shadow-accent">
            <Camera />
          </div>
        )}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-medium"
          >
            {athlete.firstname} {athlete.lastname}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="block font-medium text-muted-foreground text-sm"
          >
            {athlete.state}
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default ProfileUserline;
