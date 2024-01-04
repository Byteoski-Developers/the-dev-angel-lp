import clsx from "clsx";

export interface ICurriculumPill {
  text: string;
  color: string;
  textColor: string;
}
export const CurriculumPill: React.FC<ICurriculumPill> = (props) => {
  return (
    <div
      className={clsx(
        "px-3.5 w-fit py-2 rounded-md  bg-[${props.color}] font-normal ${props.textColor}",
        props.color === "yellow" ? "bg-secondaryYellow" : "bg-[#D7FFDBD1]",
      )}
    >
      {props.text}
    </div>
  );
};
