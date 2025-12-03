import { User } from "lucide-react";
import Image from "next/image";

interface IAvatarProps {
  imageSrc?: string;
  fullName?: string;
}

const handleMakeInitials = (name: string) => {
  const namesArray = name.trim().split(" ");
  if (namesArray.length === 0) return "";
  if (namesArray.length === 1) return namesArray[0].charAt(0).toUpperCase();
  const firstInitial = namesArray[0].charAt(0).toUpperCase();
  const lastInitial = namesArray[namesArray.length - 1].charAt(0).toUpperCase();
  return firstInitial + lastInitial;
};

const Avatar = ({ imageSrc, fullName }: IAvatarProps) => {
  if (imageSrc) {
    return (
      <Image
        src={imageSrc}
        width={48}
        height={48}
        alt={fullName || ""}
        className="object-cover rounded-full h-12 w-12"
      />
    );
  }
  if (!imageSrc && fullName) {
    return (
      <div className="w-12 h-12 flex items-center justify-center text-sm border border-border rounded-full font-bold">
        {handleMakeInitials(fullName)}
      </div>
    );
  }
  if (!imageSrc && fullName) {
    return (
      <div className="w-12 h-12 flex items-center justify-center">
        <User />
      </div>
    );
  }
};

export default Avatar;
