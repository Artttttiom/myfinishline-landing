const imgVercel = "https://www.figma.com/api/mcp/asset/22c8ff51-939d-4b23-bcaa-84f36149b5e3";
const imgTailwind = "https://www.figma.com/api/mcp/asset/9a364aea-af57-4865-aafe-be617d228fb9";
const imgSupabase = "https://www.figma.com/api/mcp/asset/3c0a4415-837c-45d5-b980-9aaafeb2fc92";
const imgFigma = "https://www.figma.com/api/mcp/asset/57da49bc-3c44-4b71-a925-745e1b42ca04";
const imgAstro = "https://www.figma.com/api/mcp/asset/ab21e60a-9ba7-41ee-bb74-00af6a6f70c5";

export default function LogoCloud() {
  return (
    <section className="bg-white flex flex-col items-center py-12 md:py-24 w-full">
      <div className="flex items-center max-w-[1280px] px-4 md:px-8 w-full">
        <div className="flex flex-col items-start flex-1">
          {/* Text */}
          <p className="font-normal text-sm md:text-base leading-6 text-[#71717a] text-center w-full">
            Over 2+ million players worldwide are gaming their way to fitness with MyFinishLine.
          </p>

          {/* Logos */}
          <div className="flex flex-wrap gap-6 md:gap-12 items-center justify-center pt-6 md:pt-8 w-full">
            <div className="h-[30px] md:h-[42px] w-[100px] md:w-[140px]">
              <img src={imgVercel} alt="Vercel" className="w-full h-full object-contain" />
            </div>
            <div className="h-[14px] md:h-[20px] w-[115px] md:w-[161px]">
              <img src={imgTailwind} alt="Tailwind" className="w-full h-full object-contain" />
            </div>
            <div className="h-[17px] md:h-[24px] w-[88px] md:w-[123px]">
              <img src={imgSupabase} alt="Supabase" className="w-full h-full object-contain" />
            </div>
            <div className="h-[14px] md:h-[20px] w-[52px] md:w-[73px]">
              <img src={imgFigma} alt="Figma" className="w-full h-full object-contain" />
            </div>
            <div className="h-[20px] md:h-[28px] w-[76px] md:w-[107px]">
              <img src={imgAstro} alt="Astro" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
