import { IContract } from "../ContractList";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

const Contract = ({ title, description, isReceived, rewards }: IContract) => {
  return (
    <li className="bg-card p-4 border-border border-2 rounded-2xl">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10">
          <Image
            src="/icons/logo.svg"
            width={32}
            height={17}
            alt="Logo"
            className="dark:invert"
          />
        </div>
        <span className="block font-semibold text-md">{title}</span>
      </div>
      <span className="block font-medium text-xs mt-2">{description}</span>
      <div className="flex gap-2 mt-4">
        {rewards.map((reward) => (
          <div className="flex flex-col items-center justify-center">
            <div className="p-2 bg-accent rounded-xl">
              <reward.Icon />
            </div>
            <span className="font-bold text-xs mt-1">+{reward.amount}</span>
          </div>
        ))}
      </div>
      <Button className="w-full mt-4" disabled={isReceived}>
        Receive{isReceived && "d"}
      </Button>
    </li>
  );
};

export default Contract;
