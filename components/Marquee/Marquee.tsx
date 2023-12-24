import FastMarquee from "react-fast-marquee"
import Image from "next/image"
import star from "../../public/assets/images/softStars.svg"
import { string1, string2 } from "./MarqueeData"




export const Marque1 =()=> {

    return(
        <div className="rotate-6">
        <FastMarquee className="bg-orangered-200 rotate-6 "pauseOnHover autoFill={true} speed={100}>
            
            {string1.map((item, index) => (
                <div key={index} className="mx-2 flex flex-row  items-center text-sm font-normal font-poppins text-black" >
                    {item.title}
                    <Image className="flex mx-2 my-1 -rotate-6 size-3" alt="" src={star} />
                </div>
            ))}
        </FastMarquee>
        </div>
    )
}
export const Marque2 =()=> {

    return(
        <div className="-rotate-6">
        <FastMarquee className="bg-black rotate-6 object-fit"direction="right" pauseOnHover autoFill={true} speed={100}>
            
            {string2.map((item, index) => (
                <div key={index} className="mx-2 flex flex-row items-center text-sm font-normal font-poppins text-white" >
                    {item.title}
                    <Image className="flex mx-2 my-1 -rotate-6 size-3" alt="" src={star} />
                </div>
            ))}
        </FastMarquee>
        </div>
    )
}