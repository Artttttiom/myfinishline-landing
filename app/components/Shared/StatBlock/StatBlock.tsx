interface IStatBlockProps {
  label: string;
  value: string | number;
  labelClassName?: string;
  valueClassName?: string;
}

const StatBlock = ({
  label,
  value,
  labelClassName,
  valueClassName,
}: IStatBlockProps) => {
  return (
    <div>
      <span
        className={
          "font-medium text-[14px] whitespace-nowrap " + valueClassName
        }
      >
        {value}
      </span>
      <span
        className={
          "block leading-4 font-medium text-muted-foreground text-[12px] " +
          labelClassName
        }
      >
        {label}
      </span>
    </div>
  );
};

export default StatBlock;
