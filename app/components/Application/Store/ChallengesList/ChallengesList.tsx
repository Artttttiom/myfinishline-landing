import ChallengeItem from "./ChallengeItem/ChallengeItem";

export interface IChallenge {
  id: number;
  title: string;
  description: string;
  disabled: boolean;
}

const challenges: IChallenge[] = [
  {
    id: 1,
    title: "Americas Run",
    description: "“From New York to Rio”",
    disabled: false,
  },
  {
    id: 2,
    title: "Champion",
    description: "A set for those who want to win",
    disabled: true,
  },
  {
    id: 1,
    title: "Leader",
    description: "A set for the most daring runners",
    disabled: false,
  },
];

const ChallengesList = () => {
  return (
    <ul className="flex flex-col gap-2">
      {challenges.map((challenge) => (
        <ChallengeItem key={challenge.id} {...challenge} />
      ))}
    </ul>
  );
};

export default ChallengesList;
