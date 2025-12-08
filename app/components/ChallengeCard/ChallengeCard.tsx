import Image from "next/image";
import Link from "next/link";
import ProgressLine from "../Shared/ProgressLine/ProgressLine";

type Props = {};

const ChallengeCard = (props: Props) => {
  return (
    <div className="p-6 border border-[#e4e4e7] bg-linear-to-b from-[#C3B7E2] via-[#FBFBFB] to-[#F4E8FD]">
      <div className="flex gap-3">
        <Image
          src="/images/application/challenge1.png"
          alt="Challenge 1"
          width={78}
          height={78}
        />
        <div className="flex flex-col justify-between">
          <h5 className="mt-2.5">Amazonia Route</h5>
          <div className="flex items-center justify-between">
            <span className="">649 km</span>
            <Link href="homepage" className="underline">
              Go to map
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-8">
        We are traveling around South America to find some treasures!
      </p>
      <div>
        <ProgressLine progress={70} />
      </div>
    </div>
  );
};

export default ChallengeCard;
