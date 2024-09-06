import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";

export default function Page() {
  const Blogs = [
    {
      author: "Abhishek Raghav",
      url: "https://medium.com/devlup-labs/stopstalk-from-web-app-to-mobile-app-307981fbe8e8",
      content: "StopStalk: From Web App to Mobile App",
    },
    {
      author: "Abhishek Raghav",
      url: "https://medium.com/devlup-labs/stopstalk-from-web-app-to-mobile-app-307981fbe8e8",
      content: "StopStalk: From Web App to Mobile App",
    },
    {
      author: "Abhishek Raghav",
      url: "https://medium.com/devlup-labs/stopstalk-from-web-app-to-mobile-app-307981fbe8e8",
      content: "StopStalk: From Web App to Mobile App",
    },
    {
      author: "Abhishek Raghav",
      url: "https://medium.com/devlup-labs/stopstalk-from-web-app-to-mobile-app-307981fbe8e8",
      content: "StopStalk: From Web App to Mobile App",
    },
  ];

  const Projects = [
    {
      name: "CDC",
      image: "",
      github: "",
      website: "",
    },
    {
      name: "CDC",
      image: "",
      github: "",
      website: "",
    },
    {
      name: "CDC",
      image: "",
      github: "",
      website: "",
    },
    {
      name: "CDC",
      image: "",
      github: "",
      website: "",
    },
  ];
  return (
    <div className="p-8 pl-[20%] pr-[20%]">
      <div>PROJECT</div>
      <div className="flex gap-20 ">
        {Projects.map((data,index) => (
          <Card
          isFooterBlurred
          className=" h-[300px] col-span-12 sm:col-span-7"
          key={index}
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              {data.name}
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-5.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex justify-between">
          <a href={data.website} target="_blank">
              <Button radius="full" size="sm">
                {" "}
                Learn More
              </Button>
            </a>
            <a href={data.website} target="_blank">
              <Button radius="full" size="sm">
                {" "}
                Learn More
              </Button>
            </a>
          </CardFooter>
        </Card>
        ))}
      </div>
      <div>BLOG</div>
      <div className="flex gap-20">
        {Blogs.map((data, index) => (
          <Card
            isFooterBlurred
            className=" h-[300px] col-span-12 sm:col-span-7"
            key={index}
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {data.author}
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-5.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-10 text-white/60">{data.content}</p>
                </div>
              </div>
              <a href={data.url} target="_blank">
                <Button radius="full" size="sm">
                  {" "}
                  Learn More
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
