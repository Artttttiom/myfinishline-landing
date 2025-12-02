import Booster from "./Booster/Booster";
import { Coins } from "lucide-react";

export interface IBooster {
  id: number;
  title: string;
  description: string;
  energy: number;
  reward: number;
}

const boosters: IBooster[] = [
  {
    id: 1,
    title: "Standart",
    description: "Will help improve your running results",
    energy: 1,
    reward: 1,
  },
  {
    id: 2,
    title: "Champion",
    description: "A set for those who want to win",
    energy: 1,
    reward: 1,
  },
  {
    id: 1,
    title: "Leader",
    description: "A set for the most daring runners",
    energy: 5,
    reward: 2,
  },
];

const BoosterList = () => {
  return (
    <>
      <div className="flex items-center gap-1 w-fit ml-auto mr-0">
        <span className="font-bold text-2xl">19</span>
        <Coins />
      </div>
      <ul className="mt-2 flex flex-col gap-2">
        {boosters.map((booster) => (
          <Booster key={booster.id} {...booster} />
        ))}
      </ul>
      <p className="mt-6 font-regular text-sm">
        For more information on the terms of the promotion and how to receive
        bonuses{" "}
        <a href="https://google.com" className="font-medium cursor-pointer">
          <i>follow the link</i>
        </a>
      </p>
    </>
  );
};

export default BoosterList;
