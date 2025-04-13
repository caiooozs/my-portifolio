'use client'
import Image from "next/image"
import photo from "@/img/caio-photo.jpg"
export const AboutMe = () =>{
    return(
        <>
        <div id="about" className="flex justify-center p-24 items-center gap-48">
            <div className="w-1/3 ">
                <Image 
                src={photo}
                alt="caio's photo"
                className="rounded-full object-cover"
                />
            </div>
            
            <div className="md:space-y-10 max-w-4xl text-start">
                <h1 className="text-[#fff] font-bold text-7xl">About <span className="text-[#D5491D]">Me</span></h1>
                <ul className="text-[#fff] font-light text-4xl">
                    <li>Science Computer Student</li>
                    <li><a href="https://cert.efset.org/TTqu2f" className="transition-all duration-180 hover:text-[#FF8660]">A2 English Level</a></li>
                    <li><a href="#skills" className="transition-all duration-180 hover:text-[#FF8660]">knowledge in many front-end technologies</a></li>
                    <li>Expirience in academic projects about e-commerces</li>
                </ul>
            </div>
        </div>
        </>
    )
}


// className="text-white text-center max-w-xl font-bold"