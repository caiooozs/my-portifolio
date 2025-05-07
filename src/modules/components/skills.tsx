'use client'
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiZod } from "react-icons/si";
import { GrMysql } from "react-icons/gr";


export const Skills = () =>{

    return(
        <>
        <div className="p-24">
            <div id="skills" className="flex justify-center text-4xl text-[#fff] font-sans font-bold p-12"><h1>My Skills</h1></div>

            <div>
                <div className="flex text-center justify-center gap-12 text-[#fff] text-8xl">
                <IoLogoJavascript />
                <SiTypescript />
                <FaReact />
                <RiTailwindCssFill />
                <SiZod />
                <GrMysql />
                </div>
            </div>
        </div>
        </>
    )
}