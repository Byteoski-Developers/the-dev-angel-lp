import Image from "next/image";
export default function Card() {
    return (
        <div className='w-full relative flex flex-row mb-10'>
            <div className='flex flex-col mr-2'>
                <div className='mt-2 whitespace-nowrap font-poppins text-gray font-medium'>
                    Nov 23, 2023
                </div>
            </div>
            <div className='flex flex-col mx-2 relative'>
                <div className="mx-2 w-1 grow bg-lightyellow " />
                <div className="absolute top-3">
                    <Image
                        src={'/assets/images/bullet.svg'}
                        alt='bullet point'
                        width={25}
                        height={25}
                    />
                </div>
            </div>
            <div className='flex flex-col w-2/3'>
                <h4 className="font-semibold mb-1 text-xl ">
                    TheDevangel.com is <span className="text-orangered">Live Now</span>
                </h4>
                <p className="leading-relaxed text-xs  ">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
                </p>
            </div>
        </div>
    );
}