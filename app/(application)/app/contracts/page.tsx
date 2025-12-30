"use client";

import Feature from "@/app/components/Application/FeatureList/Feature/Feature";
import FeatureList from "@/app/components/Application/FeatureList/FeatureList";
import { setUserContracts } from "@/app/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { getUserContracts } from "@/app/lib/utils/userService";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const page = () => {
  const contracts = useAppSelector((state) => state.user.contracts);
  const dispatch = useAppDispatch();

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
    handleLoadContracts();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="mt-2 font-medium text-3xl leading-9 text-[#09090B]">
        Contracts
      </h2>
      {contracts.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2"
        >
          <FeatureList features={contracts || []} />
        </motion.section>
      )}
    </div>
  );
};

export default page;
