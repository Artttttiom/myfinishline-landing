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
    <table className="mt-4 w-full border-separate border-spacing-0">
      <tbody>
        {users?.map((user: IUser) => {
          return (
            <>
              <LeaderItem
                key={user.id}
                {...user}
                handleClick={() => onUserClick(user)}
              />
              <tr className="h-1"></tr>
            </>
          );
        })}
        <tr className="text-background">
          <td className="h-13"></td>
        </tr>
        {currentUserInfo && (
          <tr className="bg-success text-background">
            <td className="p-2 w-8 text-center border-success-dark border-y-2 border-l-2 rounded-l-lg">
              999
            </td>
            <td className="p-2 w-16 border-success-dark border-y-2">
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
            <td className="p-2 font-medium text-sm border-success-dark border-y-2">
              {currentUserInfo?.firstname} {currentUserInfo?.lastname}
            </td>
            <td className="p-2 text-sm leading-5 font-bold border-success-dark border-y-2">
              0
            </td>
            <td className="p-2 text-sm leading-5 font-bold border-success-dark border-y-2 border-r-2 rounded-r-lg">
              0
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default LeaderTable;
