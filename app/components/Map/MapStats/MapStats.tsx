"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

interface StatsBlockProps {
  distance: string;
  steps: Array<{ completed: boolean }>;
}

const animationVariants = {
  expanded: {
    padding: 8,
  },
  collapsed: {
    padding: 0,
  },
};

const contentVariants = {
  expanded: {
    opacity: 1,
    width: "auto",
    height: "auto",
    scale: 1,
  },
  collapsed: {
    opacity: 0,
    width: 0,
    height: 0,
    scale: 0,
  },
};

const buttonVariants = {
  expanded: {
    transform: "rotate(180deg)",
  },
  collapsed: {
    transform: "rotate(0deg)",
  },
};

const MapStats = ({ steps, distance }: StatsBlockProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const completedSteps = steps.filter((s) => s.completed).length;
  const progressPercentage = (completedSteps / steps.length) * 100;

  const handleToggleIsExpanded = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <motion.div className="sticky w-40 bottom-4 right-4 z-30 float-right">
      <motion.div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-3 border border-gray-200/50 overflow-hidden">
        <motion.div className="mb-3 mt-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-600">Distance</span>
            <span className="text-xs font-semibold text-gray-800">
              0/{distance} km
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-gray-600">On track</span>
            <span className="text-xs font-semibold text-green-600">1 day</span>
          </div>
        </motion.div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium text-gray-600">Progress</span>
            <span className="text-xs font-semibold text-gray-800">
              {completedSteps}/{steps.length} steps
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-linear-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <div className="text-right mt-1">
            <span className="text-xs text-gray-500">
              {progressPercentage.toFixed(0)}%
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MapStats;
