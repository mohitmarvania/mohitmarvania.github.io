"use client";
import React from "react";
import { NavBar } from "@/components/helper/NavBar";

import { Contact } from "@/components/sections/Contact";
import { Photography } from "@/components/sections/Photography";


export default function Gallery() {
    return (
        <main className="relative bg-black flex justify-center items-center flex-col mx-auto w-full overflow-x-clip">
            <div className="w-full max-w-full">
                <NavBar />
                <Photography />
                <Contact />
            </div>
        </main>
    )
}