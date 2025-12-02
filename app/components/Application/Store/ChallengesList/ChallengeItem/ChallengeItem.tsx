import { Button } from "@/app/components/ui/button";
import { IChallenge } from "../ChallengesList";
import { ChevronRight, CircleStar } from "lucide-react";

const ChallengeItem = ({ title, description, disabled }: IChallenge) => {
  return (
    <li className="bg-card p-4 border-border border-2 rounded-2xl">
      <div className="flex items-center justify-between">
        <div>
          <span className="block font-semibold text-md">{title}</span>
          <span className="block font-medium text-xs">{description}</span>
        </div>
        <div className="p-2 bg-accent rounded-xl">
          <CircleStar />
        </div>
      </div>
      <Button disabled={disabled} className="mt-5 w-full">
        Select
        <ChevronRight />
      </Button>
    </li>
  );
};

export default ChallengeItem;
