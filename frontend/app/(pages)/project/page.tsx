"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useState, useEffect } from "react";

// Define the Project type based on your data structure
interface Project {
  name: string;
  github: string;
  website: string;
  discription: string;
  short_discription: string;
  picture: string;
}

export default function Page() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_SERVER_URL;
        if (!baseUrl) {
          throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
        }

        const response = await fetch(`${baseUrl}/api/fetch-project`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error: any) {
        console.error("Failed to fetch projects:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div
        className="flex justify-center items-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
          height: "200px",
        }}
      >
        <div className="flex justify-center text-4xl mb-10 font-black text-white">
          PROJECT
        </div>
      </div>
      <div className="p-8 pl-[20%] pr-[20%] max-sm:px-[5%] max-md:px-[5%] max-lg:px-[10%] max-xl:px-[10%]">
        {loading ? (
          <div className="flex justify-center">Loading projects...</div>
        ) : error ? (
          <div className="flex justify-center text-red-500">Error: {error}</div>
        ) : (
          <div className="flex gap-20 grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {projects.map((data, index) => (
              <Card className="py-4" key={index}>
                <CardHeader className="pb-0 pt-0 px-4 flex-col items-center">
                  <h4 className="font-bold text-large">{data.name}</h4>
                </CardHeader>

                <CardBody className="overflow-visible py-2 items-center flex">
                  <Image
                    alt={`Background for ${data.name}`}
                    className="object-cover rounded-xl"
                    src={data.picture}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">{data.discription}</p>
                  <small className="text-default-500">{data.short_discription}</small>
                </CardHeader>
                <CardHeader className="flex justify-around m-2">
                  {data.github && (
                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={30} />
                    </a>
                  )}
                  {data.website && (
                    <a href={data.website} target="_blank" rel="noopener noreferrer">
                      <TbWorld size={30} />
                    </a>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
