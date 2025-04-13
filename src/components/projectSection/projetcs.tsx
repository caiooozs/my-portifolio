'use client'
import { Card, CardContent, CardTitle, CardDescription, CardHeader, CardFooter } from "../ui/card";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import peopleSync from "@/img/peoplesync_exemple.png"


export const Projects = () =>{
    return(

        <>
            <div id="projects" className="flex justify-center text-5xl text-white font-sans font-bold p-6">
                <h1>Projects</h1>
            </div>

            <div className="grid grid-cols-2 gap-6 p-12">
                <div className="transition-transform duration-300 transform hover:-translate-y-2">
                              <Card>
                        <CardHeader>
                            <CardTitle><h1 className="font-bold text-5xl">People Sync</h1></CardTitle>
                            <CardDescription><p className="text-xl font-light text-[#000]">People Sync is a web application that allows you to register multiple employees so that you can control each of them. The system has several features and we use Zod for validations and NextJS with Tailwind to create the interfaces. We also use ShadCN components to facilitate development. I was responsible to do the front end, and used this technologies mentioned above in development.</p>
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Image
                            src={peopleSync}
                            alt="peopleSync_Exemple"
                            />
                        </CardContent>

                        <CardFooter className="flex justify-end text-5xl">
                            <a href="" className="transition-transform duration-100 hover:scale-110"><FaGithub /></a>
                        </CardFooter>
                </Card>
                </div>

                <div className="transition-transform duration-300 transform hover:-translate-y-2">
                <Card>
                        <CardHeader>
                            <CardTitle><h1 className="font-bold text-5xl">People Sync</h1></CardTitle>
                            <CardDescription><p className="text-xl font-light text-[#000]">People Sync is a web application that allows you to register multiple employees so that you can control each of them. The system has several features and we use Zod for validations and NextJS with Tailwind to create the interfaces. We also use ShadCN components to facilitate development. I was responsible to do the front end, and used this technologies mentioned above in development.</p>
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Image
                            src={peopleSync}
                            alt="peopleSync_Exemple"
                            />
                        </CardContent>

                        <CardFooter className="flex justify-end text-5xl">
                            <a href="" className="transition-transform duration-100 hover:scale-110"><FaGithub /></a>
                        </CardFooter>
                </Card>
                </div>

                <div className="transition-transform duration-300 transform hover:-translate-y-2">
                <Card>
                        <CardHeader>
                            <CardTitle><h1 className="font-bold text-5xl">People Sync</h1></CardTitle>
                            <CardDescription><p className="text-xl font-light text-[#000]">People Sync is a web application that allows you to register multiple employees so that you can control each of them. The system has several features and we use Zod for validations and NextJS with Tailwind to create the interfaces. We also use ShadCN components to facilitate development. I was responsible to do the front end, and used this technologies mentioned above in development.</p>
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Image
                            src={peopleSync}
                            alt="peopleSync_Exemple"
                            />
                        </CardContent>

                        <CardFooter className="flex justify-end text-5xl">
                            <a href="" className="transition-transform duration-100 hover:scale-110"><FaGithub /></a>
                        </CardFooter>
                </Card>
                </div>

                <div className="transition-transform duration-300 transform hover:-translate-y-2">
                <Card>
                        <CardHeader>
                            <CardTitle><h1 className="font-bold text-5xl">People Sync</h1></CardTitle>
                            <CardDescription><p className="text-xl font-light text-[#000]">People Sync is a web application that allows you to register multiple employees so that you can control each of them. The system has several features and we use Zod for validations and NextJS with Tailwind to create the interfaces. We also use ShadCN components to facilitate development. I was responsible to do the front end, and used this technologies mentioned above in development.</p>
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Image
                            src={peopleSync}
                            alt="peopleSync_Exemple"
                            />
                        </CardContent>

                        <CardFooter className="flex justify-end text-5xl">
                            <a href="" className="transition-transform duration-100 hover:scale-110"><FaGithub /></a>
                        </CardFooter>
                </Card>
                </div>
      
            </div>
        </>
    )
}
export default Projects;