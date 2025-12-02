import Step from "@/app/components/Application/Map/Step/Step";
import Image from "next/image";

const challenge = {
  steps: [
    {
      id: 1,
      title: "Welcome to MyFinishLine",
      index: 1,
      completed: true,
      progress: 0.5,
    },
    {
      id: 2,
      title: "Your first steps",
      index: 2,
      progress: 0,
    },
    {
      id: 3,
      title: "Almost there!",
      index: 1,
      progress: 0,
    },
    {
      id: 4,
      title: "Champion!",
      index: 2,
      progress: 0,
    },
  ],
};

const reversedSteps = challenge.steps.reverse();

const stepsAmount = challenge.steps.length || 1;

const page = () => {
  return (
    <main className="max-w-3xl mx-auto bg-foreground w-full min-h-[calc(100vh-72px)] relative flex flex-col">
      <Image
        objectFit="cover"
        src="/images/application/map.png"
        fill
        alt="Map"
      />
      <div
        style={{
          gridTemplateColumns: `repeat(${stepsAmount},1fr)`,
          gridTemplateRows: `repeat(${stepsAmount},1fr)`,
        }}
        className="absolute p-2 h-full z-10 w-full grid gap-2 items-center justify-center"
      >
        {reversedSteps.map((step) => {
          const array: any[] = [null, null, null, null];

          array[step.index] = (
            <Step id={step.id} title={step.title} stepsAmount={stepsAmount} />
          );

          return array.map((item) => {
            if (item) {
              return item;
            } else {
              return <div />;
            }
          });
        })}
      </div>
    </main>
  );
};

export default page;
