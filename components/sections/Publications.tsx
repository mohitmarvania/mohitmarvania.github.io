"use client";
import React from "react";
import { PapersCard } from "../helper/PapersCard";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export function Publications() {
    return (
        <div className="w-full pb-[4rem]">
            <div className="h-full w-full flex flex-col gap-10 rounded-md md:items-center mt-6 bg-black/[0.96] antialiased bg-grid-white/[0.06] relative overflow-hidden">
                <div>
                    <h3 className="text-4xl md:text-7xl text-center font-normal bg-clip-text text-white/[0.05] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-display">Publications</h3>
                </div>
                <div className="p-6 w-full flex flex-col gap-4 items-center justify-center">
                    <PapersCard />
                    <InteractiveHoverButton className="w-fill mt-4 font-body" onClick={() => window.open("https://scholar.google.com/citations?user=EUbxNRYAAAAJ&hl=en&oi=ao", "_blank")}>View Papers</InteractiveHoverButton>
                </div>
            </div>
        </div>
    )
}