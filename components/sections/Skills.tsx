"use client";
import React from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";

export function Skills() {
    return (
         <div className="w-full h-full pb-[4rem]">
            <div className="h-full w-full flex flex-col gap-10 rounded-md md:items-center mt-6 bg-black/[0.96] antialiased bg-grid-white/[0.06] relative overflow-hidden items-center">
                <div>
                    <h3 className="text-4xl md:text-7xl text-center font-normal bg-clip-text text-white/[0.05] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-1" style={{fontFamily: " 'Space Grotesk', sans-serif"}}>
                        Skills & Technologies
                    </h3>
                </div>
                <Terminal>
                    <TypingAnimation>&gt; install --core list-skills</TypingAnimation>
                    <AnimatedSpan delay={1500} className="text-green-500">
                        <span>✔ Python</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={2000} className="text-green-500">
                        <span>✔ C++</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={2500} className="text-green-500">
                        <span>✔ Java</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={3000} className="text-green-500">
                        <span>✔ JavaScript / TypeScript</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={3500} className="text-green-500">
                        <span>✔ linux & shell scripting</span>
                    </AnimatedSpan>

                    <AnimatedSpan delay={4000} className="text-green-500">
                        <span>✔ Firebase</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={4500} className="text-green-500">
                        <span>✔ PyTorch</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={5000} className="text-green-500">
                        <span>✔ Tensorflow</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={5500} className="text-green-500">
                        <span>✔ Scikit-learn</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={6000} className="text-green-500">
                        <span>✔ Hugging Face</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={6500} className="text-green-500">
                        <span>✔ Pandas</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={7000} className="text-green-500">
                        <span>✔ Matplotlib</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={7500} className="text-green-500">
                        <span>✔ Jupyter Notebooks</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={8000} className="text-green-500">
                        <span>✔ Weights &amp; Biases</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={8500} className="text-green-500">
                        <span>✔ Keras</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={9000} className="text-green-500">
                        <span>✔ OpenCV</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={9500} className="text-green-500">
                        <span>✔ Deep learning models</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={10000} className="text-green-500">
                        <span>✔ Machine learning</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={10500} className="text-green-500">
                        <span>✔ Distributed clustering</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={11000} className="text-green-500">
                        <span>✔ Natural language processing</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={11500} className="text-green-500">
                        <span>✔ Computer vision</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={12000} className="text-green-500">
                        <span>✔ AWS (EC2, S3, Lambda)</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={12500} className="text-green-500">
                        <span>✔ Git / Github</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={13000} className="text-green-500">
                        <span>✔ Docker</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={13500} className="text-green-500">
                        <span>✔ Kubernetes</span>
                    </AnimatedSpan>

                    <TypingAnimation delay={14000} className="text-muted-foreground">
                        Skills loaded successfully.
                    </TypingAnimation>
                </Terminal>
            </div>
        </div>
    )
}