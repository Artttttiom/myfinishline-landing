import LeaderItem from "./LeaderItem/LeaderItem";
import Image from "next/image";
import { IAthlete } from "@/app/types";

export interface IUser {
  id: number;
  image?: string;
  name: string;
  distance: number;
  hours: number;
  achievements?: string[];
}

interface LeaderTableProps {
  users: IUser[];
  currentUserInfo: IAthlete;
  onUserClick: (user: IUser) => void;
}

const LeaderTable = ({
  users,
  currentUserInfo,
  onUserClick,
}: LeaderTableProps) => {
  return (
    <table className="mt-4 w-full border-spacing-y-1">
      <thead>
        <tr className="w-full text-left">
          <th className="p-2 text-center">#</th>
          <th className="p-2"></th>
          <th className="p-2">Name</th>
          <th className="p-2">Distance</th>
          <th className="p-2">Time</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user: IUser) => {
          return (
            <LeaderItem
              key={user.id}
              {...user}
              handleClick={() => onUserClick(user)}
            />
          );
        })}
        <tr className="text-background">
          <td className="h-13"></td>
        </tr>
        {currentUserInfo && (
          <tr className="border bg-foreground text-background">
            <td className="p-2 w-8 rounded-l-lg text-center">9999</td>
            <td className="p-2 w-16">
              {currentUserInfo?.profile && (
                <Image
                  className="object-cover rounded-full h-12 w-12"
                  src={
                    currentUserInfo?.profile ||
                    "/images/application/profile-pic.jpg"
                  }
                  alt={`User ${currentUserInfo?.firstname} ${currentUserInfo?.lastname}`}
                  width={48}
                  height={48}
                />
              )}
            </td>
            <td className="p-2">
              {currentUserInfo?.firstname} {currentUserInfo?.lastname}
            </td>
            <td className="p-2">0</td>
            <td className="p-2 rounded-r-lg">0</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default LeaderTable;
