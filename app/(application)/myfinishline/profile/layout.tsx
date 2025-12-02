import Tabs from "@/app/components/Application/Profile/Tabs/Tabs";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { Input } from "@/app/components/ui/input";
import { Camera } from "lucide-react";
import Image from "next/image";

const profileLinks = [
  {
    id: 1,
    name: "Account",
    href: "/myfinishline/profile/account",
  },
  {
    id: 2,
    name: "Password",
    href: "/myfinishline/profile/password",
  },
  {
    id: 3,
    name: "Activities",
    href: "/myfinishline/profile/activities",
  },
  {
    id: 4,
    name: "Strava",
    href: "/myfinishline/profile/strava",
  },
];

const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const profilePicture = "/images/application/profile-pic.jpg";
  //   const profilePicture = false;

  return (
    <main className="w-full min-h-screen h-full bg-background max-w-4xl mx-auto p-2">
      <section className="flex gap-2">
        {profilePicture ? (
          <Image
            className="rounded-lg"
            src={profilePicture}
            width={120}
            height={120}
            alt="Profile image"
          />
        ) : (
          <div className="border-border shrink-0 border-2 rounded-lg w-[120px] h-[120px] flex items-center justify-center shadow-inner shadow-accent">
            <Camera />
          </div>
        )}
        <Input placeholder="Username" />
        <ThemeToggle />
      </section>
      <div className="mt-4">
        <Tabs links={profileLinks} layoutId="profile-tab-navigation" />
      </div>
      <div className="mt-4">{children}</div>
    </main>
  );
};

export default page;
