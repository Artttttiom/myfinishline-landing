// Full guarantee badge assets from Figma
const imgBadgeStamp = "https://www.figma.com/api/mcp/asset/e7617885-92b0-42dc-b9f9-d3b287aac4aa";
const imgTextTop = "https://www.figma.com/api/mcp/asset/7ac104c4-82d8-434a-bb40-50068c5fcff6";
const imgTextBottom = "https://www.figma.com/api/mcp/asset/89f438db-7b77-4ecf-b3d6-3b3bb415c1cc";

export default function MoneyBackBanner() {
  return (
    <section className="flex justify-center py-6 md:py-12 w-full px-4 md:px-8">
      <div
        className="max-w-[960px] w-full rounded-3xl px-6 md:px-[120px] py-6 md:py-9 flex flex-col md:flex-row items-center gap-6 md:gap-[60px] border border-[#b7b9e2]"
        style={{
          background: "linear-gradient(to bottom, #5170d5, #cee9d8)",
          backdropFilter: "blur(6.131px)",
        }}
      >
        {/* Money Back Guarantee Badge */}
        <div className="flex-shrink-0 w-[100px] h-[83px] md:w-[150px] md:h-[125px] relative">
          {/* Circle stamp with GUARANTEE text */}
          <img
            src={imgBadgeStamp}
            alt="Money Back Guarantee"
            className="absolute inset-0 w-full h-full"
          />
          {/* Top curved "MONEY BACK" text */}
          <div
            className="absolute"
            style={{
              left: "20.15%",
              top: "10.86%",
              right: "20.69%",
              bottom: "78.26%"
            }}
          >
            <div
              className="absolute"
              style={{
                left: "0",
                top: "0",
                right: "20.5%",
                bottom: "0"
              }}
            >
              <img src={imgTextTop} alt="" className="w-full h-full" />
            </div>
          </div>
          {/* Bottom curved "MONEY BACK" text */}
          <div
            className="absolute"
            style={{
              left: "20.15%",
              top: "10.86%",
              right: "20.69%",
              bottom: "10.88%"
            }}
          >
            <div
              className="absolute"
              style={{
                left: "24.33%",
                top: "65.87%",
                right: "0",
                bottom: "0"
              }}
            >
              <img src={imgTextBottom} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2 md:gap-3 text-center md:text-left">
          <h3 className="font-semibold text-2xl md:text-[36px] text-white leading-tight md:leading-none tracking-[-0.72px] whitespace-nowrap">
            Money-Back Guarantee
          </h3>
          <p className="font-normal text-sm md:text-base text-white/90 leading-relaxed md:leading-7">
            Unable to continue participating or start the quest? Contact us,
            <br className="hidden md:block" />
            and we&apos;ll issue a refund.
          </p>
        </div>
      </div>
    </section>
  );
}
