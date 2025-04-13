'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import logo from "@/img/logo.png"

export const Header = () =>{
    return(
        <>
           <div id="header" className="flex justify-between md:items-center bg-[#222222] sm:h-24 sm:items-center sm:p-6 md:h-24 md:p-12 md:w-full">
                <Image 
                src={logo}
                alt="logo"
                className="w-24 transition-transform hover:scale-105 animate-[float_4s_ease-in-out_infinite]"
                />
                    <nav className="text-[#fff] flex gap-10">
                        <a href="#header" className="transition-transform duration-200 hover:scale-110">Home</a>
                        <a href="#about" className="transition-transform duration-200 hover:scale-110">About Me</a>
                        <a href="#projects" className="transition-transform duration-200 hover:scale-110">Projects</a>
                        <a href="#skills" className="transition-transform duration-200 hover:scale-110">Skills</a>
                        <a href="#contact" className="transition-transform duration-200 hover:scale-110">Contact</a>
                    </nav>
            </div> 
        </>
    )
}
export default Header;