"use client";
import React from "react";
import { PhotosLayout } from "../helper/PhotosLayout";

export function Photography() {
    return (
        <div className="w-full pb-[4rem]">
            <div className="w-full h-full rounded-md md:items-center mt-6 bg-black/[0.96] antialiased bg-grid-white/[0.06] relative overflow-hidden">
                <div className="flex flex-col gap-2 items-center justify-center pt-10">
                    <h4 className="text-2xl md:text-5xl text-center font-normal bg-clip-text text-white/[0.05] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-poppins p-1.5">Here's a glimpse into my</h4>
                    <h3 className="text-4xl md:text-7xl text-center font-normal bg-clip-text text-white/[0.05] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-display p-1">
                        Gallery
                    </h3>
                    <p className="font-body text-base bg-clip-text text-white/[0.01] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">I recommend to have look in big device</p>
                </div>
                <div className="w-full max-w-[95vw] mx-auto">
                    <PhotosLayout />
                </div>
            </div>
        </div>
    )
};
