import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { projects } from "@/data/Data";
import { FaLocationArrow } from "react-icons/fa";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export function ProjectCard() {
    return (
        <>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(
                    ({id, title, des, img, tags, link}) => (
                        <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                            <PinContainer title={title} href={link}>
                                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] mb-10 sm:h-[40vh] bg-neutral-900 lg:rounded-3xl">
                                    <img src={img} alt={title} className="z-10 absolute" />
                                </div>
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 font-poppins">
                                    {title}
                                </h1>
                                <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-3 text-justify font-body">
                                    {des}
                                </p>
                                <div className='flex items-center justify-between mt-7 mb-3'>
                                    <div className='flex flex-wrap flex-1 gap-1 items-center '>
                                        {tags.map(
                                            (tag, index) => (
                                                <div key={tag} className='text-xs font-body font-medium text-gray-200 bg-white/10 px-3 py-2 rounded-full'>
                                                    {tag}
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <p className='flex lg:text-xl md:text-xs text-sm font-display font-semibold'>Check This</p>
                                        <FaLocationArrow className='ms-3 text-neutral-300'/>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    )
                )}
            </div>
            <div className="flex justify-center items-center">
                <InteractiveHoverButton className="w-fill sm:mt-7 md:mt-4 font-body" onClick={() => window.open("https://github.com/mohitmarvania?tab=repositories", "_blank")}>View More</InteractiveHoverButton>
            </div>
        </>
    )
}