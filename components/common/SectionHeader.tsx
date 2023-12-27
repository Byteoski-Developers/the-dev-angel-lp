interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: Props) {
  // Splitting the title into words
  const words = title.split(" ");

  return (
    <div>
      <div className="md:text-3xl text-center md:mt-16 mt-8  text-2xl md:font-bold font-semibold">
        {`<`} <span className="text-primaryOrange">{words[0]}</span>{" "}
        {words.slice(1).join(" ")} {`>`}
      </div>
      <div className="md:text-xl text-base font-semibold opacity-60">
        {subtitle}
      </div>
    </div>
  );
}
