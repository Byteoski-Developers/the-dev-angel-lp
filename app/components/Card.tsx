import React from "react";
import 'tailwindcss/tailwind.css';

interface MyProps{
    h1: string;
    h2: string;
    description:string;
}

const Card :React.FC<MyProps>= (props) => {
    return (
        <div className="bg-gradient-to-b from-orange-500 to-yellow-500 p-px w-1/3  rounded-md shadow-lg shadow-vermilion-500/10" >
            <div className="flex flex-col bg-white rounded-md">
                <div className="px-9 pt-7">
                    <p className="text-xl font-semibold pb-6 font-poppins">
                        <span>{props.h1}</span>&nbsp;
                        <span className="text-orange-500">{props.h2}</span>
                    </p>
                    <p className="text-sm font-poppins font-medium">
                        {props.description}
                    </p>
                    <div className="pl-7">
                        <span className='right-arrow' ></span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;
