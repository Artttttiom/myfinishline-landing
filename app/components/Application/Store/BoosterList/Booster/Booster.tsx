import { Gift, Zap } from "lucide-react";
import { IBooster } from "../BoosterList";

const Booster = ({ title, description, energy, reward }: IBooster) => {
  return (
    <li className="flex items-center justify-between bg-card p-4 border-border border-2 rounded-2xl">
      <div>
        <span className="block font-semibold text-md">{title}</span>
        <span className="block font-medium text-xs">{description}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col items-center justify-center">
          <div className="p-2 bg-accent rounded-xl">
            <Zap />
          </div>
          <span>{energy}</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-2 bg-accent rounded-xl">
            <Gift />
          </div>
          <span>{reward}</span>
        </div>
      </div>
    </li>
  );
};

export default Booster;
