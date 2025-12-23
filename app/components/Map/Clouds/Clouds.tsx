"use client";

import { motion, AnimatePresence } from "motion/react";
import CloudIcon from "../../Icons/CloudIcon";

interface CloudRevealProps {
  isVisible: boolean;
}

const CLOUD_MAP = [
  { x: 10, y: 5, size: 60, side: "left", delay: 0.1 },
  { x: 50, y: 0, size: 70, side: "right", delay: 0.3 },
  { x: -10, y: 30, size: 65, side: "left", delay: 0.2 },
  { x: 60, y: 40, size: 45, side: "right", delay: 0.4 },
  { x: 100, y: 30, size: 45, side: "right", delay: 0.3 },
  { x: 85, y: 55, size: 45, side: "right", delay: 0.3 },
  { x: 0, y: 65, size: 60, side: "left", delay: 0.1 },
  { x: 55, y: 75, size: 70, side: "right", delay: 0.5 },
  { x: 20, y: -20, size: 80, side: "left", delay: 0.2 },
  { x: 35, y: 30, size: 40, side: "left", delay: 0.2 },
  { x: 75, y: 30, size: 40, side: "right", delay: 0.2 },
  { x: 15, y: 60, size: 80, side: "left", delay: 0.3 },
  { x: 95, y: 70, size: 30, side: "right", delay: 0.3 },
];

const Clouds = ({ isVisible }: CloudRevealProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cloud-wrapper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="fixed inset-0 z-20 flex items-center justify-center overflow-hidden pointer-events-none"
        >
          <div className="relative w-[100vmax] h-[100vmax]">
            {CLOUD_MAP.map((cloud, i) => (
              <motion.div
                key={i}
                initial={{ x: "-50%", y: "-50%", opacity: 1 }}
                exit={{
                  x: cloud.side === "left" ? "-200%" : "200%",
                  opacity: 0,
                  scale: 1.2,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: cloud.delay,
                }}
                className="absolute"
                style={{
                  top: `${cloud.y}%`,
                  left: `${cloud.x}%`,
                  width: `${cloud.size}vmax`,
                }}
              >
                <CloudIcon
                  color={i % 2 === 0 ? "#ffffff" : "#f1f5f9"}
                  className="w-full h-auto drop-shadow-xl"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Clouds;
