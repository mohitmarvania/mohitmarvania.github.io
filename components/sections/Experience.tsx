"use client";
import React from "react";
import { ExperienceTimeline } from "../helper/ExperienceTimeline";

export function Experience() {
    return (
        <div className="w-full pb-[4rem]">
            <div className="h-full w-full rounded-md md:items-center mt-6 bg-black/[0.96] antialiased bg-grid-white/[0.06] relative overflow-hidden">
                <div>
                    <h3 className="text-4xl md:text-7xl text-center font-normal bg-clip-text text-white/[0.05] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-display">Experience</h3>
                </div>
                <div className="">
                    <ExperienceTimeline />
                </div>
            </div>
        </div>
    )
}