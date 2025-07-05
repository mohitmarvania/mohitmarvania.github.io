"use client";
import React from "react";
import { ProjectCard } from "../helper/ProjectCard";

export function Projects() {
    return (
        <div className="w-full pb-[2rem] md:pb-[4rem]">
            <div className="h-full w-full rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.06] relative overflow-hidden px-4 sm:px-6 md:px-8">
                <div className="py-8 md:py-12">
                    <h3 className="text-3xl sm:text-4xl md:text-7xl text-center font-normal bg-clip-text text-white/[0.05] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-display pb-1">Projects</h3>
                </div>
                <div>
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}