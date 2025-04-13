'use client'
import { Button } from "../ui/button";
import React from "react";
import Link from "next/link";

export const MainContent = () =>{ 

    return(
        <>
        <div className="flex flex-col h-200">
            <div className="items-center justify-center sm:p-12 md:p-24">
                <div className="text-[#fff] text-center space-y-3">
                    <h1 className="text-8xl bg-gradient-to-t from-[#D5491D] to-[#FF8660] bg-clip-text text-transparent font-extrabold font-sans">Hello!</h1>
                    <h1 className="text-8xl font-sans">I'm <span className="font-extrabold transition-all duration-200 hover:text-[#FF8660]"><a href="#about">Caio</a></span></h1>
                    <h6 className="text-4xl font-extralight">Front End Developer</h6>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="space-x-16">
                    <Button asChild 
                    className="sm:h-16 md:h-16 md:w-64 bg-[#fff] text-black space-8 hover:text-white">
                        <Link href="#projects">Go to Projects</Link>
                    </Button>
                    <Button className="sm:h-16 md:h-16 md:w-64 bg-[#fff] text-black space-8 hover:text-white">Download CV</Button>
                </div>
            </div>
        </div>
        </>
        
    )
}
export default MainContent;
