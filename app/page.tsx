import cardsData, { ICardData } from "@/constants/data";
import clsx from "clsx";
import Image from "next/image";

export default function landingPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">

        {
          cardsData.map((data: ICardData) => (
            <div
              key={data.id}
              className={
                clsx("flex justify-between bg-accent-500 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition",
                  data.id % 2 === 0 ? 'flex-col' : 'flex-col-reverse'
                )
              }>
              <div className="p-4 space-y-4 text-white">
                <h1
                  className="text-3xl font-bold"
                >
                  {
                    data.title
                  }
                </h1>
                <p className="text-lg opacity-70">
                  {data.subtitle}
                </p>
              </div>
              <div className="relative">
                <Image
                  alt='jalkd'
                  src={data.imageSrc}
                  width={300}
                  height={300}
                  className='w-full object-contain'
                />
                <button className="absolute bottom-6 right-4 rounded-full bg-white h-10 w-10 text-xl hover:translate-y-1 hover:shadow-lg transition">
                  &#9654;
                </button>
              </div>
            </div>
          ))
        }


      </div>
    </>
  )
}