"use client";

import useGetStravaUser from "@/app/hooks/useGetStravaUser";
import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Avatar from "../../Shared/Avatar/Avatar";

const rootLayouts = [
  "/myfinishline",
  "/myfinishline/homepage",
  "/myfinishline/store/booster",
  "/myfinishline/store/my-challenges",
  "/myfinishline/store/contracts",
  "/myfinishline/stats",
  "/myfinishline/more",
  "/myfinishline/profile/account",
  "/myfinishline/profile/awards",
  "/myfinishline/profile/activities",
];

const AppHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { athlete } = useGetStravaUser();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoToEdit = () => {
    router.push("/myfinishline/settings");
  };

  return (
    <header className="border-b border-border sticky top-0 z-40 bg-background">
      <div className="flex items-center justify-between max-w-4xl mx-auto px-4">
        {rootLayouts.find((rootLayout) => pathname === rootLayout) ? (
          <div className="h-14" />
        ) : (
          <button
            onClick={handleGoBack}
            className="flex gap-1 font-medium py-4 cursor-pointer"
          >
            <ChevronLeft />
            Back
          </button>
        )}
        <button className="flex items-center gap-2" onClick={handleGoToEdit}>
          <span>{athlete.username || "User"}</span>
          <Avatar
            size={36}
            imageSrc={athlete.profile}
            fullName="Not Applicable"
          />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
