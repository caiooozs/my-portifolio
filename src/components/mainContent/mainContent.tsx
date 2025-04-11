'use client'
import { Button } from "../ui/button";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiZod } from "react-icons/si";
import React from "react";


export const MainContent = () =>{ 

    return(
        <>
        {/* div general */}
            <div className="flex items-center justify-center md:p-24">
                <div className="text-[#fff] text-center space-y-3">
                    <h1 className="text-8xl bg-gradient-to-t from-[#D5491D] to-[#FF8660] bg-clip-text text-transparent font-extrabold font-sans">Hello!</h1>
                    <h1 className="text-8xl font-sans">I'm <span className="font-extrabold">Caio</span></h1>
                    <h6 className="text-4xl font-extralight">Front End Developer</h6>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="p-8 space-x-16">
                    <Button className="md:h-16 md:w-64 bg-[#fff] text-black space-8 hover:text-white ">Ir para Projetos</Button>
                    <Button className="md:h-16 md:w-64 bg-[#fff] text-black space-8 hover:text-white">Download CV</Button>
                </div>
            </div>


                <div className="flex justify-center p-8">
                    <h1 className="text-white text-2xl font-light">Experiência em</h1>
                </div>
                <div className="flex justify-center text-7xl gap-8 text-white">
                    <IoLogoJavascript />
                    <FaReact />
                    <RiNextjsFill />
                    <RiTailwindCssFill />
                    <SiZod />
                    <GrMysql />
                </div>
        </>
        
    )
}

export default MainContent;