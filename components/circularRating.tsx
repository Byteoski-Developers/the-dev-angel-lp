interface ICircularRating {
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

export default function CircularRating(props: ICircularRating) {
  const { rating } = props;
  return (
    <>
      <div className="flex justify-center mt-4">
        {Array.from({ length: 5 }, (_, index) => index + 1).map((idx) => {
          return <img src={"/CircularRating.svg"} alt="My SVG" key={idx} />;
        })}
      </div>
    </>
  );
}
