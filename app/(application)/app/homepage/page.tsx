"use client";

import { setChallenge } from "@/app/lib/features/challenge/challengeSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { useEffect, useState } from "react";
import Map from "@/app/components/Map/Map";
import axios from "axios";

const page = () => {
  const challenge = useAppSelector((state) => state.challenge);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetActiveChallenge = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/api/user/active-challenge");
      dispatch(setChallenge(data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetActiveChallenge();
  }, []);

  console.log("challenge", challenge);

  return <Map {...challenge} />;
};

export default page;
