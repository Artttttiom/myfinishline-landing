"use client";

import ActivitiesList from "@/app/components/Application/Stats/ActivitiesList/ActivitiesList";
import { Button } from "@/app/components/ui/button";
import { setActivities } from "@/app/lib/features/activities/activitiesSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import {
  getUserActivities,
  updateUserStravaActivities,
} from "@/app/lib/utils/userService";
import { Loader2, RefreshCw } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const page = () => {
  const { isLoaded, activities } = useAppSelector((state) => state.activities);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleGetActivitiesFromStrava = async () => {
    setIsUpdating(true);
    try {
      await updateUserStravaActivities();
    } catch (error) {
      console.error("Error fetching activities:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleLoadActivities = async () => {
    setIsLoading(true);
    try {
      const data = await getUserActivities();
      dispatch(setActivities(data?.data || []));
    } catch (error) {
      console.error("Error fetching activities:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadAllActivities = async () => {
    await handleGetActivitiesFromStrava();
    await handleLoadActivities();
  };

  const handleFirstLoadActivities = async () => {
    if (!isLoaded) {
      await handleGetActivitiesFromStrava();
    }
    await handleLoadActivities();
  };

  useEffect(() => {
    handleFirstLoadActivities();
  }, []);

  return (
    <main className="relative px-4">
      <div className="mt-10 flex items-center justify-between">
        <div className="flex-1"></div>
        <h4 className="text-3xl text-center font-medium leading-9 text-[#09090B] flex-1">
          Recent Activities
        </h4>
        <div className="flex-1 flex justify-end">
          <Button
            onClick={handleLoadAllActivities}
            className="ml-auto mr-0 rounded-full w-10 h-10"
          >
            <div className={`${isUpdating && "animate-spin"}`}>
              <RefreshCw />
            </div>
          </Button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <div className="flex justify-center items-center mt-8">
            <Loader2 width={48} height={48} className="animate-spin" />
          </div>
        ) : activities?.length > 0 ? (
          <div className="mt-8">
            <ActivitiesList activities={activities} />
          </div>
        ) : (
          <div className="text-center text-sm py-10">
            No activities found. Connect your Strava account to see your
            activities here.
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default page;
