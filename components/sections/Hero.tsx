"use client";
import React from "react";
import { Info } from "../helper/Info";
import { Social } from "../helper/Social";
import { Spotlight } from "../ui/spotlight-new";
import { SpinningText } from "../magicui/spinning-text";

export function Hero() {
    return (
        <div className="pb-[2rem] md:pb-[4rem]">
            <div className="w-full h-[90vh] md:h-screen">
                <div className="h-full w-screen rounded-md flex flex-col items-center justify-center md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.06] relative overflow-hidden">
                    <Spotlight />
                    <div className="p-4 md:p-6 md:pl-8 md:pr-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between relative z-10 w-full ">
                        <Info />
                        <div className="mt-8 md:mt-0">
                            <Social />
                        </div>
                    </div>
                    <div className="absolute bottom-10 md:bottom-18 left-1/2 transform-translate-x-1/2 text-white/80">
                        <SpinningText radius={6} duration={15} className="scale-75 md:scale-100 opacity-35 md:opacity-100">explore • collaborate • create •</SpinningText>
                    </div>
                </div>
            </div>
        </div>
    )
}