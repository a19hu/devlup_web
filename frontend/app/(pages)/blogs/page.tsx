import {
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@nextui-org/react";
import ShinyButton from "@/components/magicui/shiny-button";

export default function Page() {
  const Blogs = [
    {
      author: "Abhishek Raghav",
      url: "https://medium.com/devlup-labs/stopstalk-from-web-app-to-mobile-app-307981fbe8e8",
      content: "StopStalk: From Web App to Mobile App",
    },
    {
      author: "Shashank Mohabia",
      url: "https://medium.com/devlup-labs/android-navigation-component-3-adding-options-menu-and-navigation-drawer-8041512b8d3e",
      content: "Android Navigation Component#3: Adding Options Menu ",
    },
    {
      author: "Anshul Ahuja",
      url: "https://medium.com/devlup-labs/how-to-setup-raspberry-pi-for-beginners-aeedc2cb994a",
      content: "How to setup Raspberry Pi for Beginners !",
    },
    {
      author: "Ajat Prabha",
      url: "https://medium.com/devlup-labs/working-with-github-and-git-6cd8c99b9e0",
      content: "Working with GitHub and Git",
    },
  ];

  return (
    <>
      <div 
      className="flex justify-center items-center"
      style={{
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",height:"200px"
      }}
      >
      <div className="flex justify-center text-4xl  mb-10 font-black text-white ">
      BLOG
      </div>
      </div>
    <div className="p-8 pl-[20%] pr-[20%] max-sm:px-[5%] max-md:px-[5%] max-lg:px-[10%] max-xl:px-[10%]">
      <div className="flex gap-20  grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {Blogs.map((data, index) => (

            <a href={data.url} target="_blank" rel="noopener noreferrer">
          <Card className="py-4" key={index}>
            <CardHeader className="pb-0 pt-0 px-4 flex-col items-center">
              {/* <h4 className="font-bold text-large">{data.name}</h4> */}
            </CardHeader>

            <CardBody className="overflow-visible py-2 items-center flex">
              <img
                alt="Blog image"
                className="object-cover rounded-xl "
                width={500}
                height={500}
                src=""
                                // width={270}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{data.content}</p>
              <small className="text-default-500">{data.author}</small>
            </CardHeader>
          </Card>
        </a>
        ))}
        
      </div>
      <div className="flex justify-center items-center pt-10 ">
        <a href="https://medium.com/devlup-labs" target="_blank" rel="noopener noreferrer">
        <ShinyButton>MORE BLOGS</ShinyButton>
        </a>
          
        </div>
    </div>
    </>
  );
}
