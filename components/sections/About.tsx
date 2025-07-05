"use client";
import React from "react";
import { LinkPreview } from "../ui/link-preview";

export function About() {
    return (
        <div className="w-full pb-[4rem]">
            <div className="h-full w-full flex flex-col rounded-md md:items-center mt-6 bg-black/[0.96] antialiased bg-grid-white/[0.06] relative overflow-hidden">
                <div>
                    <h3 className="text-4xl md:text-7xl text-center font-normal bg-clip-text text-white/[0.05] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-display">About</h3>
                </div>
                <div className="p-6 w-full flex items-center justify-center">
                    <div className="mt-4 w-full font-normal text-lg text-neutral-300 max-w-5xl text-justify font-poppins" style={{cursor: "default"}}>
                        My research interests includes Natural Language Processing (NLP), Large Language Models (LLMs), Large Reasoning Models (LRMs) and Computer Vision. As a 2nd year M.S. student at George Mason University, I am studing Computer Science with concentration in Machine Learning. I worked as a Research Assistant in GMU’s Natural Language Processing group under Dr. Ziyu Yao. Apart from that, I am working on developing new techniques in LLM and LRM reasoning tackling challenges like mitigating “overthinking” in reasoning modules, and optimizing prompts for robust logic and retrieval.<br/><br/>
        
                        Prior to GMU, I earned my B.Tech in Computer Science at Charusat University, Changa (India), where I completed a Research Internship focused on computer vision applications and published a paper on emotion detection in online learning environments. I’ve also built production grade mobile apps during my industry internship as an Android and iOS developer.<br/><br/>
        
                        When I’m not experimenting with transformers or fine-tuning vision-language pipelines, you’ll find me behind the lens capturing nature’s details or on the field playing cricket, football (soccer), badminton and occasionally basketball.
                    </div>
                </div>
            </div>
        </div>
    )
}