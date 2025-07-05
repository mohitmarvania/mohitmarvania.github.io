"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function PhotosLayout() {
    return (
        <div className="w-full h-screen py-10 group-hover:scale-105">
            <LayoutGrid cards={cards as any} />
        </div>
    );
}


const cards = [
    {
        id: 1,
        content: "",
        className: "md:col-span-2 row-span-2",
        thumbnail: "./photo3.jpg",
        type: "image"
    },
    {
        id: 2,
        content: "",
        className: "col-span-1 row-span-2",
        thumbnail: "./photo1.jpg",
        type: "image",
    },
    {
        id: 3,
        content: "",
        className: "col-span-2 row-span-2",
        thumbnail: "./video2.mp4",
        type: "video",
    },
    {
        id: 4,
        content: "",
        className: "col-span-1 row-span-2",
        thumbnail:"./photo2.jpg",
    },
    {
        id: 5,
        content: "",
        className: "col-span-2 row-span-2",
        thumbnail:"./photo6.jpg",
    },
    {
        id: 6,
        content: "",
        className: "col-span-2 row-span-2",
        thumbnail: "./photo7.jpg",
        type:"image",
    },
]
