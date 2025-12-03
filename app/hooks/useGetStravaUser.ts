"use client";

import { useEffect, useState } from "react";
import { IAthlete } from "../types";

const useGetStravaUser = () => {
  const [data, setData] = useState<{
    athlete: IAthlete | null;
    isConnected: boolean;
  } | null>({ athlete: null, isConnected: false });

  const handleGetStravaUser = async () => {
    try {
      const response = await fetch("/api/strava/user");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching Strava user data:", error);
    }
  };

  const handleResetUser = () => {
    setData({ athlete: null, isConnected: false });
  };

  useEffect(() => {
    handleGetStravaUser();
  }, []);

  return {
    athlete: data?.athlete || ({} as IAthlete),
    isConnected: data?.isConnected || false,
    handleResetUser,
  };
};

export default useGetStravaUser;
