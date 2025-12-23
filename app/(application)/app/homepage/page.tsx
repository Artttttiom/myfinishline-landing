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

  useEffect(() => {
    (async () => {
      try {
        const data = await getUserActiveChallenge();
        dispatch(setChallenge(data));
      } catch (error) {
        console.error("Failed to load challenge:", error);
      } finally {
        // Data is now in Redux; start the cloud exit animation
        setIsFetching(false);
      }
    })();
  }, [dispatch]);

  const isActive = challenge.status.type === "active";

  return (
    <main className="relative h-screen w-full overflow-hidden ">
      <Clouds isVisible={isFetching} />
      {isActive && <Map {...challenge} />}
    </main>
  );
};

export default Page;
