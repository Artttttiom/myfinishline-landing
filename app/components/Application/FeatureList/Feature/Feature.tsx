import { IContract } from "@/app/types";
import { Star } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

const areEqual = (prevProps: IContract, nextProps: IContract) => {
  return prevProps.id === nextProps.id;
};

const Feature = memo(({ name, description, image_url }: IContract) => {
  return (
    <li className="flex items-center gap-4 first:mt-0 mt-9">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white shrink-0">
        {image_url ? (
          <Image src={image_url} alt="Feature image" width={40} height={40} />
        ) : (
          <Star width={20} height={20} />
        )}
      </div>
      <div className="">
        <span className="font-medium leading-7 text-[#09090B]">{name}</span>
        <p className="mb-0 mt-auto text-muted-foreground leading-6">
          {description}
        </p>
      </div>
    </li>
  );
}, areEqual);

export default Feature;
