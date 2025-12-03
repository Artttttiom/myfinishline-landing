"use client";

import { Input } from "@/app/components/ui/input";

const page = () => {
  return (
    <div>
      <h3 className="mt-4 text-2xl">Account info</h3>
      <Input className="mt-2" placeholder="Name" />
      <Input className="mt-2" placeholder="Email" />
      <h3 className="mt-4">Account created</h3>
      <span>28.11.2025</span>
    </div>
  );
};

export default page;
