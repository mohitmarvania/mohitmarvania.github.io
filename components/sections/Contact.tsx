"use client";
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

export function Contact() {
    const [copied, setCopied] = React.useState(false);
    useState(false);

    const copyToClipboard = () => {
        const email = "mohitmarvania@gmail.com"

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            })
        } else {
            const input = document.createElement("input");
            input.value = email;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        }
    };

    return (
        <div className="w-screen h-full pb-[3rem] pt-[2rem] rounded-t-4xl border-2 shadow-white shadow-2xl">
            <div className="h-full w-full rounded-md md:items-center bg-black/[0.96] antialiased bg-grid-white/[0.06] relative overflow-hidden">
                <div>
                    <h3 className="text-2xl flex flex-col justify-center md:text-4xl text-left pl-12 font-normal bg-clip-text text-white/[0.05] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-display">
                    Like What You See?
                    <span className="font-poppins text-4xl md:text-7xl">Let's Connect</span>
                    </h3>
                </div>
                <div className="flex flex-col gap-8 justify-center">
                    <div className="pl-5 md:pl-12 mt-15 flex flex-col">
                        <h3 className="font-normal text-lg font-poppins text-neutral-400">Email</h3>
                        <div className="flex items-center gap-2 md:gap-8 text-2xl mt-1 font-display flex-col md:flex-row text-left">
                            <h2 className="font-semibold">mohitmarvania@gmail.com</h2>
                            <div className="flex items-center gap-2 cursor-pointer text-neutral-600 hover:text-neutral-400 transition-colors duration-300" onClick={copyToClipboard}>
                                <IoCopyOutline />
                                <p className="text-lg font-poppins">{copied ? "Copied!" : "Copy To Clipboard"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="pl-5 md:pl-12 flex flex-col">
                        <h3 className="font-normal text-lg font-poppins text-neutral-400">Social</h3>
                        <div className="flex items-center gap-8 text-2xl mt-1 font-display">
                            <h1 className="font-semibold cursor-pointer hover:-translate-y-1 hover:text-neutral-300 transition-transform duration-300" onClick={() => window.open("https://www.linkedin.com/in/mohit-marvania/", "_blank")}>Linkedin</h1>
                            <p className="font-extralight text-neutral-200">|</p>
                            <h1 className="font-semibold cursor-pointer hover:-translate-y-1 hover:text-neutral-300 transition-transform duration-300" onClick={() => window.open("https://github.com/mohitmarvania", "_blank")}>Github</h1>
                        </div>
                    </div>
                </div>
            </div>
            <span className="absolute bottom-1 md:right-8 right-2 md:text-[15rem] text-[8rem] font-display font-bold text-white/10 pointer-events-none select-none">Mohit</span>
        </div>
    )
}
