interface IProgressLineProps {
  progress: number;
}

const ProgressLine = ({ progress }: IProgressLineProps) => {
  return (
    <div className="w-full h-6 flex items-center shadow-lg rounded-3xl relative bg-white p-1">
      <div
        className={`flex items-center text-white justify-end pr-1 absolute h-5 left-0 rounded-3xl bg-linear-to-r from-[#FFD700/50] to-[#FFD700] border-r-2`}
        style={{ width: `${progress}%` }}
      >
        <span
          className="block absolute text-[13px] w-fit font-medium leading-5"
          style={
            progress < 15
              ? { left: "calc(100% + 4px)", color: "black" }
              : { right: 4, color: "white" }
          }
        >
          {progress?.toFixed(1)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressLine;
