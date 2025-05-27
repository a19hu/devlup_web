"use client"

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@nextui-org/react";
import ShinyButton from "@/components/magicui/shiny-button";

// Define TypeScript interface for blog data
interface Blog {
  author: string;
  website: string; // renamed from url to match API schema
  discription: string; // matches API schema with typo included
  picture: string | null;
}

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/fetch-blog`);
        
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch blogs");
        console.error("Error fetching blogs:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div 
        className="flex justify-center items-center"
        style={{
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
          height: "200px"
        }}
      >
        <div className="flex justify-center text-4xl mb-10 font-black text-white">
          BLOG
        </div>
      </div>
      <div className="p-8 pl-[20%] pr-[20%] max-sm:px-[5%] max-md:px-[5%] max-lg:px-[10%] max-xl:px-[10%]">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <p>Loading blogs...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-red-500">Error: {error}</p>
          </div>
        ) : (
          <div className="flex gap-20 grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {blogs.map((blog, index) => (
              <a href={blog.website} target="_blank" rel="noopener noreferrer" key={index}>
                <Card className="py-4">
                  <CardHeader className="pb-0 pt-0 px-4 flex-col items-center">
                    {/* <h4 className="font-bold text-large">{blog.name}</h4> */}
                  </CardHeader>

                  <CardBody className="overflow-visible py-2 items-center flex">
                    <img
                      alt="Blog image"
                      className="object-cover rounded-xl"
                      width={500}
                      height={500}
                      src={blog.picture || ""}
                    />
                  </CardBody>
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{blog.discription}</p>
                    <small className="text-default-500">{blog.author}</small>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        )}
        <div className="flex justify-center items-center pt-10">
          <a href="https://medium.com/devlup-labs" target="_blank" rel="noopener noreferrer">
            <ShinyButton>MORE BLOGS</ShinyButton>
          </a>
        </div>
      </div>
    </>
  );
}
