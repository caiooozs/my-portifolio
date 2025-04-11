'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const Header = () =>{
    return(
        <>
           <div id="header" className="flex justify-between md:items-center bg-[#222222] md:h-24 md:p-12 md:w-full">
                    <Avatar>
                        <AvatarImage src="@/"/>
                        <AvatarFallback className="text-[#fff]">Caio's portfolio</AvatarFallback>
                    </Avatar>

                    <nav className="text-[#fff] flex gap-10 hover:">
                        <a href="#header">Home</a>
                        <a href="#about">Sobre mim</a>
                        <a href="#projects">Projetos</a>
                        <a href="#contact">Contato</a>
                    </nav>
            </div> 
        </>
    )
}
export default Header;