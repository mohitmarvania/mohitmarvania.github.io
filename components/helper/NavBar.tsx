"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome } from "@tabler/icons-react";
import { TbPhotoSquareRounded } from "react-icons/tb";

export function NavBar() {

    // Use a media quert to detect screen size
    const [isMediumUp, setIsMediumUp] = React.useState(true);

    React.useEffect(() => {
        const checkScreenSize = () => {
            setIsMediumUp(window.innerWidth >= 768);    // Tailwind's md: breakpoint
        };
        checkScreenSize(); // Initial check
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const navItems = [
        {
            name: "Work",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white mx-auto" />
        },
        ...(isMediumUp
            ? [{
                name: "Gallery",
                link: "/gallery",
                icon: <TbPhotoSquareRounded className="h-4 w-4 text-neutral-500 dark:text-white mx-auto" />
            }]
            : []
        )
    ]

    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems}/>
        </div>
    )
}
