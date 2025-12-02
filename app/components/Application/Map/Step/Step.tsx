"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Xarrow from "react-xarrows";

interface IStepProps {
  id: number;
  title: string;
  stepsAmount: number;
}

const Step = ({ id, title, stepsAmount }: IStepProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentStepId = `challenge-step-${id}`;
  const nextStepId = id > stepsAmount - 1 ? null : `challenge-step-${id + 1}`;

  const handleSetIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div
        id={`challenge-step-${id}`}
        key={id}
        className=" h-15 w-15 relative flex items-center justify-center cursos-pointer"
        onClick={handleSetIsOpen}
      >
        <div className="w-full h-full bg-blue-300 shadow-2xl shadow-blue-900 rounded-full flex items-center justify-center rotate-x-45">
          <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-full bg-white p-2 rounded shadow-2xl"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {!!nextStepId && (
        <Xarrow
          dashness
          color="white"
          start={currentStepId}
          end={nextStepId}
          showHead={false}
        />
      )}
    </>
  );
};

export default Step;
