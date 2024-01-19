import Image from "next/image";
interface props {
  creatorName: string;
  year: string;
  img: string;
}
export default function CreatorCard({ creatorName, year, img }: props) {
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <Image
        src={`/assets/images/members/${img}.png`}
        width={800}
        height={800}
        className="size-64 object-cover rounded-lg p-[1px] bg-gradient-to-b from-primaryOrange to-secondaryYellow shadow-sm shadow-primaryOrange"
        alt={creatorName}
      />
      <div className=" text-center">
        <p className="font-bold text-secondaryYellow text-lg normal-case">
          {creatorName}
        </p>
        <p className="text-base leading-normal">{year} years of expertise</p>
      </div>
    </div>
  );
}
