import { AnimatePresence, motion } from "motion/react";

interface IShimmerProps {
  children: React.ReactNode;
  className?: string; // Fixed typo: classname → className
  width?: number;
  height?: number;
  loading?: boolean;
}

const Shimmer = ({
  children,
  className = "",
  width = 80,
  height = 80,
  loading = true,
}: IShimmerProps) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            className="absolute rounded-full w-full h-full z-100 animate-pulse-shimmer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5 }}
          ></motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default Shimmer;
