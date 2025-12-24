"use client";

import { useEffect, useState } from "react";
import { setChallenge } from "@/app/lib/features/challenge/challengeSlice";
import { getUserActiveChallenge } from "@/app/lib/utils/userService";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import Map from "@/app/components/Map/Map";
import Clouds from "@/app/components/Map/Clouds/Clouds";

const Page = () => {
  const challenge = useAppSelector((state) => state.challenge);
  const dispatch = useAppDispatch();

  const [isFetching, setIsFetching] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasSeenClouds = sessionStorage.getItem("clouds_seen");

    if (hasSeenClouds) {
      setIsFetching(false);
      setShouldAnimate(false);
    } else {
      setShouldAnimate(true);
    }

    (async () => {
      try {
        const data = await getUserActiveChallenge();
        dispatch(setChallenge(data));
      } catch (error) {
        console.error("Failed to load challenge:", error);
      } finally {
        sessionStorage.setItem("clouds_seen", "true");
        setIsFetching(false);
      }
    })();
  }, [dispatch]);

  const isActive = challenge.status.type === "active";

  return (
    <>
      {" "}
      {shouldAnimate && <Clouds isVisible={isFetching} />}
      {isActive && <Map {...challenge} />}
    </>
  );
};

export default Page;
