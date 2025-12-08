interface IStatBlockProps {
  label: string;
  value: string | number;
}

const StatBlock = ({ label, value }: IStatBlockProps) => {
  return (
    <div>
      <span className="font-medium text-[10px]">{value}</span>
      <span className="block leading-4 font-medium text-muted-foreground text-[8px]">
        {label}
      </span>
    </div>
  );
};

export default StatBlock;
