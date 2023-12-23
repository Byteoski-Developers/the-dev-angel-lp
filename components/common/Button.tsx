interface ButtonFilledProps {
  text: string;
  filled?: boolean;
}

export default function Button({ text, filled }: ButtonFilledProps) {
  return (
    <button
      className={`rounded-lg px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold transition
        ${filled ? "bg-primaryOrange text-white hover:bg-opacity-80" : "bg-opacity-0 border border-primaryOrange text-primaryOrange hover:bg-primaryOrange hover:border-primaryOrange hover:text-white"}`}
    >
      {text}
    </button>
  );
}
