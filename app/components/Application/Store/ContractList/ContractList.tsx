import { LucideProps, Trophy, Zap } from "lucide-react";
import Contract from "./Contract/Contract";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface IContract {
  id: number;
  title: string;
  isReceived: boolean;
  description: string;
  rewards: {
    id: number;
    Icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    amount: number;
  }[];
}

const contracts: IContract[] = [
  {
    id: 1,
    title: "Run 12 km per day",
    description: "Starting today, run 12km a day to complete contract",
    isReceived: true,
    rewards: [
      {
        id: 1,
        Icon: Zap,
        amount: 5,
      },
      {
        id: 1,
        Icon: Trophy,
        amount: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Run 40km",
    description: "Run 40 kilometers without time limits",
    isReceived: false,
    rewards: [
      {
        id: 1,
        Icon: Zap,
        amount: 1,
      },
    ],
  },
];

const ContractList = () => {
  return (
    <ul className="flex flex-col gap-2">
      {contracts.map((contract) => (
        <Contract key={contract.id} {...contract} />
      ))}
    </ul>
  );
};

export default ContractList;
