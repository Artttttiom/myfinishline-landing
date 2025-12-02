import { User } from "lucide-react";
import Image from "next/image";
import { IUser } from "../LeaderTable";

interface ILeaderItem extends IUser {
  handleClick: (userId: number) => void;
}

const gradientColors = {
  1: "bg-linear-to-r from-[#FDF684] to-[#DDAD1A] from-0 to-100",
  2: "bg-linear-to-r from-[#E7E7EB] to-[#99A1BD] from-0 to-100",
  3: "bg-linear-to-r from-[#EBC8B7] to-[#AF5B2F] from-0 to-100",
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
      className={`${
        gradientColors[id as keyof typeof gradientColors] || "bg-accent"
      }  cursor-pointer`}
      onClick={handlePressUser}
    >
      <td
        className={`p-2 w-8 rounded-l-lg text-center ${
          id < 4 ? "text-black" : "text-foreground"
        }`}
      >
        {id}
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
      <td
        className={`p-2 font-medium text-sm ${
          id < 4 ? "text-black" : "text-foreground"
        }`}
      >
        {name}
      </td>
      <td className="p-2 text-sm leading-5 font-bold">{distance} km</td>
      <td className="p-2 text-sm leading-5 font-bold rounded-r-lg">
        {hours} h
      </td>
    </tr>
  );
};

export default LeaderItem;
