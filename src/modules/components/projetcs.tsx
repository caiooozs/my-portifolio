"use client";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from "../../components/ui/card";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { PeopleSyncImage, GoMovies, Today } from "@/constants";
export const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="flex justify-center text-5xl text-white font-sans font-bold p-6"
      >
        <h1>Projects</h1>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-6 md:p-12 sm:flex sm:flex-col sm:space-y-4">
        <div className="transition-transform duration-300 transform hover:-translate-y-2">
          <Card className="md:h-12/12">
            <CardHeader>
              <CardTitle>
                <h1 className="font-bold text-5xl">People Sync</h1>
              </CardTitle>
              <CardDescription>
                <p className="text-xl font-light text-[#000]">
                  People Sync is a web application that allows you to register
                  multiple employees so that you can control each of them. The
                  system has several features and we use Zod for validations and
                  NextJS with Tailwind to create the interfaces. We also use
                  ShadCN components to facilitate development. I was responsible
                  to do the front end, and used this technologies mentioned
                  above in development.
                </p>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Image
                src={PeopleSyncImage.peoplesync}
                alt={PeopleSyncImage.title}
                width={1024}
                height={96}
              />
            </CardContent>
            <CardFooter className="flex justify-end text-5xl">
              <a
                href="https://github.com/caiooozs?tab=repositories"
                className="transition-transform duration-100 hover:scale-110"
              >
                <FaGithub />
              </a>
            </CardFooter>
          </Card>
        </div>

        <div className="transition-transform duration-300 transform hover:-translate-y-2">
          <Card className="md:h-12/12">
            <CardHeader>
              <CardTitle>
                <h1 className="font-bold text-5xl">Go Movies</h1>
              </CardTitle>
              <CardDescription>
                <p className="text-xl font-light text-[#000]">
                  Go movies is an application created to consume the TMDB API
                  and build a layout to consume this API. Next.js 14,
                  TypeScript, ShadCN/UI (with Tailwind CSS), Fetch (for
                  requests), dotenv (for environment variables) were used.
                </p>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Image
                src={GoMovies.goMovies}
                alt={GoMovies.title}
                width={1024}
                height={96}
              />
            </CardContent>
            <CardFooter className="flex justify-end text-5xl">
              <a
                href="https://github.com/caiooozs?tab=repositories"
                className="transition-transform duration-100 hover:scale-110"
              >
                <FaGithub />
              </a>
            </CardFooter>
          </Card>
        </div>

        <div className="transition-transform duration-300 transform hover:-translate-y-2">
          <Card className="md:h-12/12">
            <CardHeader>
              <CardTitle>
                <h1 className="font-bold text-5xl">Today</h1>
              </CardTitle>
              <CardDescription>
                <p className="text-xl font-light text-[#000]">
                  Today is a project that simulates a to-do list to do during
                  your day (Todo List). This project focused on architecture and
                  has a very modern and user-friendly layout. It also uses the
                  Chuck Norris API, generating jokes during a time interval.
                </p>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Image
                src={Today.today}
                alt={Today.title}
                width={1024}
                height={96}
              />
            </CardContent>
            <CardFooter className="flex justify-end text-5xl">
              <a
                href="https://github.com/caiooozs?tab=repositories"
                className="transition-transform duration-100 hover:scale-110"
              >
                <FaGithub />
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
      x
    </>
  );
};
export default Projects;
