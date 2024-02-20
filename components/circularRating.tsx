import { classNames } from "@/utils/classNames";

interface ICircularRating {
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

export default function CircularRating(props: ICircularRating) {
  const { rating } = props;
  return (
    <>
      <div className="flex justify-center mt-4">
        {Array.from({ length: 5 }, (_, index) => index + 1).map((idx) => {
          return (
            <svg
              key={idx}
              className={classNames(
                idx <= rating ? "text-[#eab308]" : "text-[#9ca3af]",
                "w-4 h-4 fill-current",
              )}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16A8 8 0 0 0 10 2zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
          );
        })}
      </div>
    </>
  );
}
