"use client";
import React, { useState, useEffect, useId } from "react";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function TextFlip() {
  const words = ["Mohit Marvania", "a Researcher", "AI Enthusiast"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 max-w-2xl text-left text-4xl leading-normal font-bold tracking-tight text-white md:text-7xl dark:text-zinc-100",
      )}
      layout
    >
      <div className="inline-block">
        <span className="bg-clip-text text-white/[0.05] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Hey, There 
        <span role="img" aria-label="waving hand" className="inline-block ml-4" style={{color: "initial"}}>👋🏼</span>
        <br />I&apos;m </span>
        <ContainerTextFlip words={words} />
      </div>
    </motion.h1>
  );
}