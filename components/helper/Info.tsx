import React from "react";
import { TextFlip } from "./text-flip";

export function Info() {

    return (
        <div className="text-left">
            <div className="text-4xl md:text-7xl font-bold bg-clip-text text-white/[0.05] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50" style={{fontFamily: " 'Space Grotesk', sans-serif"}}>
                <TextFlip />
            </div>
            <div className="mt-4 w-full font-normal text-base text-neutral-300 max-w-3xl text-justify font-poppins" style={{cursor: "default"}}>
                A 2nd year M.S. student at George Mason University, I am studing Computer Science with concentration in Machine Learning. 
            </div>
        </div>
    )
};