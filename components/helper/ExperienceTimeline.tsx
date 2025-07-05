import React from "react";
import { Timeline } from "../ui/timeline";
import { LinkPreview } from "../ui/link-preview";

export function ExperienceTimeline() {
    const data = [
        {
            title: "Feb 25 - Present",
            content: (
                <div className="text-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold font-poppins text-2xl">Research Assistant</h3>
                        <p className="text-neutral-400 font-display text-base font-normal">George Mason University, VA, USA</p>
                    </div>
                    <div className="p-2 mt-2">
                        <ul className="mt-3 list-disc list-inside text-white font-light font-poppins text-lg space-y-1 text-justify">
                            <li>Being part of the {" "}
                                <LinkPreview url="https://nlp.cs.gmu.edu/" className="font-semibold text-neutral-300">GMU NLP Group</LinkPreview>{" "}, I worked on optimizing prompt for LRM-based path-planning tasks, integrating symbolic planning heuristics and using state-of-the-art (SOTA) LRMs to provide near to optimal solution for different environments in path planning tasks.</li>
                            <li>Currently, I am working on LRMs to understand how models "overthink" - analyzing model intermediate reasoning steps to identify when spurious token generation occurs and designing corrective algorithms to reduce reasoning errors.</li>
                            <li>Additionally, I am also working on watermarking techniques for LLM/LRM generated data to protect intellectual property and prevent misuse. </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "Dec 23 - Apr 24",
            content: (
                <div className="text-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold font-poppins text-2xl">Research Intern</h3>
                        <p className="text-neutral-400 font-display text-base font-normal">Charusat University, Changa, India</p>
                    </div>
                    <div className="p-2 mt-2">
                        <ul className="mt-3 list-disc list-inside text-white font-light font-poppins text-lg space-y-1 text-justify ">
                            <li>Developed a computer-vision system for real-time student engagement analysis in online learning platforms, utilizing deep learning models like ResNet50v2, VGG16 and YOLO for feature extraction and for object detection to accurately track student posture, gaze, and hand-raising behavior on large DAiSEE and YawDD datasets.</li>
                            <li>Automated end-to-end data preprocessing pipelines using Python and OpenCV, writing custom scripts to scrape and annotate video frames, normalize image dimensions, and balance class distributions which, improved training stability and reduced per epoch runtime.</li>
                            <li>Presented our findings at the Second International Conference on Robotics, Automation, and Intelligent Computing, and published a journal article with AIP Publishing detailing our deep learning architecture, data augmentation strategies, and experimental results.</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "May 23 - Jun 23",
            content: (
                <div className="text-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold font-poppins text-2xl">Android Developer Intern</h3>
                        <p className="text-neutral-400 font-display text-base font-normal">Raven Technolabs, Rajkot, India</p>
                    </div>
                    <div className="p-2 mt-2">
                        <ul className="mt-3 list-disc list-inside text-white font-light font-poppins text-lg space-y-1 text-justify ">
                            <li>Working in this remote internship I engineered a high performance receipt generator Android application using Kotlin and Java, integrating Firebase Realtime Database for backend storage. Optimized local JSON parsing routines and database read/write operations, delivering a 30% reduction in client processing time during peak load tests.</li>
                            <li>Collaborated with UI/UX team to implement iterative feature improvements such as QR-code scanning, dynamic tax calculation, and customizable invoice templates which directly resulted in a 20% increase in client retention.</li>
                            <li>Deal with client queries and feedback to ensure customer satisfaction showcasing proactive communication and problem solving skills.</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        
    ]

    return (
        <div className="relative w-full">
            <Timeline data={data}/>
        </div>
    )
};