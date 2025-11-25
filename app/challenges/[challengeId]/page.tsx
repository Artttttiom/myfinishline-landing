import ChallengeHero from "@/app/components/ChallengePage/ChallengeHero/ChallengeHero";
import LumenBackgroundBlock from "@/app/components/Shared/LumenBackgroundBlock/LumenBackgroundBlock";
import content from "@/app/lib/content/landing/content";
import ChallengeContent from "@/app/components/ChallengePage/ChallengePage";
import PurchaseChallenge from "@/app/components/ChallengePage/PurchaseChallenge/PurchaseChallenge";
import Image from "next/image";
import FAQSection from "@/app/components/ChallengeContent/FAQSection/FAQSection";
import { ReactNode } from "react";

interface IChallenge {
  id: number;
  title: string;
  description: string;
  icon?: any;
  distance: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  content: {
    id: number;
    title: string;
    image: string;
    paragraphs: { id: number; text: string }[];
  }[];
}

interface IChallengesPageProps {
  params: {
    challengeId: string;
  };
}

const page = async ({ params }: IChallengesPageProps) => {
  const challengeId = (await params).challengeId;

  // @ts-ignore
  const challenge: IChallenge = content.challenges.features.find(
    (challenge) => challenge.id === Number(challengeId)
  ) || {
    id: 0,
    title: "",
    description: "",
    distance: "",
    icon: undefined,
    content: [],
    image: {
      src: "",
      alt: "",
      width: 0,
      height: 0,
      className: "",
    },
  };

  return (
    <>
      <LumenBackgroundBlock>
        <ChallengeHero
          id={challenge.id}
          title={challenge.title}
          description={challenge.description}
          image={challenge.image}
          distance={challenge.distance}
        />
      </LumenBackgroundBlock>
      <section className="mt-40">
        <ChallengeContent content={challenge.content} />
      </section>

      <div className="relative w-full py-20 flex items-center justify-center">
        <Image
          className="object-center object-contain "
          src="/images/challenge-page/bg-blur.png"
          alt="lumen blur"
          fill
        />
        <PurchaseChallenge id={challenge.id} imageSrc={challenge.image.src} />
      </div>
      <FAQSection />
    </>
  );
};

export default page;
