import { Trophy, User } from "lucide-react";
import Image from "next/image";
import { IUser } from "../LeaderTable";

interface ILeaderItem extends IUser {
  handleClick: (userId: number) => void;
}

const trophyColors = {
  1: "goldenrod",
  2: "silver",
  3: "peru",
};

const LeaderItem = ({
  id,
  image,
  name,
  distance,
  hours,
  handleClick,
}: ILeaderItem) => {
  const handlePressUser = () => {
    handleClick(id);
  };

  return (
    <tr
      className="border bg-foreground text-background cursor-pointer"
      onClick={handlePressUser}
    >
      <td className="p-2 w-8 rounded-l-lg text-center">
        {id > 3 ? (
          id
        ) : (
          <Trophy
            className="mx-auto"
            color={trophyColors[id as keyof typeof trophyColors]}
          />
        )}
      </td>
      <td className="p-2 w-16">
        {image ? (
          <Image
            className="object-cover rounded-full h-12 w-12"
            src={image}
            alt={`User ${name}`}
            width={48}
            height={48}
          />
        ) : (
          <div className="h-12 w-12 flex items-center justify-center border-background/50 border rounded-full">
            <User />
          </div>
        )}
      </td>
      <td className="p-2">{name}</td>
      <td className="p-2">{distance}km</td>
      <td className="p-2 rounded-r-lg">{hours}h</td>
    </tr>
  );
};

export default LeaderItem;
