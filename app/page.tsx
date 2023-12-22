import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/images/Logo.svg';
import Card from './components/Card';
import clsx from 'clsx';
let fun = function landingPage() {
  const cardProps = [{
    h1: "It's",
    h2: "Free",
    description: "The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.",
  },
  {
    h1: "Best",
    h2: "Team",
    description: "The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.",
  },
  {
    h1: "24/7",
    h2: "Support",
    description: "The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.",
  }]
  return (
    <>
      <div className='flex w-full place-content-center'>
        <div className='flex flex-col  w-3/4 place-content-center'>
          <p className='flex place-content-center font-bold font-poppins text-xl'>
            <span>{'<'} Why </span>
            <span className='text-orange-500'>Devangel? </span>
            <span>{'>'}</span>
          </p>
          <p className='flex text-grey font-medium place-content-center font-poppins text-base '>
            Your One Stop Destination for Success
          </p>
          <div className=' mt-10'>
            {cardProps.map((props, index) => (
              <div className={clsx("flex  justify-center",  index % 2 === 0 ? "flex-row mr-9" : "flex-row-reverse ml-9")}>

                <Card key={index} {...props} />
                {
                index % 2 == 0 ?
                <div className='pl-32 w-1/3 ' >
                  <span className={clsx('bent-dashed-line' , index%4 ===0? "":"bent-dashed-line-reverse")} ></span>
                </div>
                :
                <Image src={"/assets/images/photo.png"} alt='' width={400} height={70} className='w-1/3 '></Image>
                }
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* <div
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
      </div> */}
    </>
  )
}

export default fun;