"use client";

import FeatureList from "@/app/components/Application/FeatureList/FeatureList";
import { IContract } from "@/app/types";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getUserContracts } from "@/app/lib/utils/userService";
import { toast } from "react-toastify";

const page = () => {
  const [contracts, setContracts] = useState<IContract[]>([]);

  const handleLoadContracts = async () => {
    try {
      const data = await getUserContracts();
      setContracts(data.data);
    } catch (error: any) {
      toast.error("Error loading contracts: ", error.response.data.message);
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoadContracts();
  }, []);

  return (
    contracts.length > 0 && (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2"
      >
        <FeatureList features={contracts || []} />
      </motion.section>
    )
  );
};

export default page;
