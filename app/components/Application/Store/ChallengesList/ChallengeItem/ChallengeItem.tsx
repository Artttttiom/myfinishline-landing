"use client";

import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { IChallenge } from "../ChallengesList";
import { ChevronRight, CircleStar } from "lucide-react";

const ChallengeItem = ({
  title,
  description,
  disabled,
  delay,
}: IChallenge & { delay: number }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay }}
      className="bg-card p-4 border-border border-2 rounded-2xl"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="block font-semibold text-md">{title}</span>
          <span className="block font-medium text-xs">{description}</span>
        </div>
        <div className="p-2 bg-accent rounded-xl">
          <CircleStar />
        </div>
      </div>
      <Button disabled={disabled} className="mt-5 w-full">
        Select
        <ChevronRight />
      </Button>
    </motion.li>
  );
};

export default ChallengeItem;
