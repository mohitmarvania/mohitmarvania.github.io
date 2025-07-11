"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../ui/use-outside-link";

export function PapersCard() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
 
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
 
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
 
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
 
  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));
 
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
 
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="flex flex-col gap-2">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 font-body"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`authors-${active.authors}-${id}`}
                      className="text-zinc-600 dark:text-zinc-400 font-normal font-display"
                    >
                      {active.authors}
                    </motion.p>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-zinc-600 dark:text-zinc-400 font-semibold font-poppins"
                    >
                      {active.description}
                    </motion.p>
                  </div>
 
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-6 py-3 text-sm rounded-full font-semibold font-poppins bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 items-center justify-center text-black whitespace-nowrap "
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="group p-4 flex flex-col md:flex-row justify-between items-center bg-transparent hover:bg-white dark:hover:bg-neutral-800 rounded-xl cursor-pointer transition-colors duration-300 border border-neutral-200 dark:border-neutral-800 hover:shadow-sm hover:shadow-white/[0.5]"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={300}
                  height={300}
                  src={card.src}
                  alt={card.title}
                  className="h-90 w-90 md:h-16 md:w-16 rounded-md object-cover object-top"
                />
              </motion.div>
              <div className="flex flex-col gap-1">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white group-hover:text-white dark:text-neutral-200 dark:group-hover:text-white-900 text-center md:text-left transition-colors duration-300 font-body"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.authors}-${id}`}
                  className="text-white/[0.8] group-hover:text-white/[0.8] dark:text-zinc-500 dark:group-hover:text-zinc-400 text-center md:text-left transition-colors duration-300 font-normal font-display"
                >
                  {card.authors}
                </motion.p>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white/[0.8] group-hover:text-white/[0.8] dark:text-zinc-500 dark:group-hover:text-zinc-400 text-center md:text-left transition-colors duration-300 font-semibold font-poppins"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0 transition-colors duration-300 flex items-center justify-center w-32 whitespace-nowrap"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
 
const cards = [
  {
    description: "AIP Publishing",
    authors: "Mohit Marvania, Ruhi Kansagara, Amit Thakkar, Dharmendrasinh Rathod",
    title: "YOLOv8-based emotion recognition for effective student engagement assessment in online learning environments",
    src: "./paper1.png",
    ctaText: "Read More",
    ctaLink: "https://doi.org/10.1063/5.0254176",
    content: () => {
      return (
        <p>
          We propose a novel YOLOv8-based framework for real-time emotion recognition to accurately assess student engagement in virtual classrooms. By capturing and analyzing facial cues during online lectures, our model significantly improves upon traditional engagement metrics. Through rigorous training and comparative testing against state-of-the-art methods, we demonstrate that the YOLOv8 architecture achieves superior accuracy and robustness on a standard engagement dataset. These results suggest a promising path forward for automated monitoring of student participation in remote learning environments.
        </p>
      );
    },
  }
];
