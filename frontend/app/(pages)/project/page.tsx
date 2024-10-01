import {
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Page() {

  const Projects = [
    {
      name: "CDC Website",
      description: "Career Development Cell's website",
      info: "https://github.com/anshulahuja98/spc_portal",
      info1:
        "Portal for automating the students and company registrations and management for placements in IIT Jodhpur ",
      weblink: "https://spc.iitj.ac.in/",
      image1: "https://spc.iitj.ac.in/static/media/cdclogo.2b386506.png",
    },
    {
      name: "Gymkhana",
      description: "The Students Gymkhana, IIT Jodhpur",
      info: "https://github.com/devlup-labs/gymkhana_portal",
      info1: "Web portal and forum for Students' Gymkhana of IIT Jodhpur",
      weblink: "https://students.iitj.ac.in/",
      image1: "http://www.iitj.ac.in/uploaded_docs/gymkhana_logo_30072018.png",
    },
    {
      name: "SDA Website",
      description: "Souvenirs IIT Jodhpur",
      info: "https://github.com/devlup-labs/souvenirs_iitj",
      info1:
        "A website for Student Design and Arts Society, IIT Jodhpur aimed at providing the photos of events in institute to its residents.",
      weblink: "https://devlup-labs.github.io/souvenirs_iitj/",
      image1:
        "https://drive.google.com/uc?export=download&id=1eib8ykyQU0qrYaTF8vkNN-cXORzsX4gf",
    },
    {
      name: "Ignus ",
      description: "Annual Cultural Fest,IIT Jodhpur",
      info: "",
      info1:
        "Main web portal for the annual cultural fest of IIT Jodhpur, Ignus.",
      weblink: "https://ignus.org/",
      image1: "https://ignus.co.in/static/ignus%20icon.png",
    },
    {
      name: "Varchas",
      description: "Annual Sports Fest,IIT Jodhpur",
      info: "https://github.com/devlup-labs/varchas",
      info1:
        "Main web portal for the annual sports fest of IIT Jodhpur, Varchas.",
      weblink: "https://varchas2020.org/",
      image1:
        "https://drive.google.com/uc?export=download&id=1irC1PQ06Nhj_K2sl8vQZx-3JYFHAsNx6",
    },
    {
      name: "MugLo",
      description: "Notes Sharing Platform",
      info: "https://github.com/devlup-labs/muglo",
      info1:
        "A website for the students of IIT Jodhpur which serves as a platform for sharing notes.",
      weblink: "https://devlup-labs.github.io/muglo/",
      image1:
        "https://drive.google.com/uc?export=download&id=1orp5ms9f4E-JnUCqFQUvrfcIa3i-skpt",
    },
    {
      name: "HMS",
      description: "Hospital Management System, IIT Jodhpur",
      info: "",
      info1: "Web portal for Health Care Center in our Institute.",
      weblink: "https://hc.iitj.ac.in/",
      image1:
        "https://github.com/devlup-labs/hms-iitj/blob/master/static/images/logo.png?raw=true",
    },
    {
      name: "CS Website",
      description: "Counselling Services",
      info: "https://github.com/devlup-labs/counselling-team",
      info1: "A website for the Counselling Services(CS) Team.",
      weblink: "http://cse.iitj.ac.in/",
      image1:
        "https://github.com/devlup-labs/counselling-team/blob/master/images/logo_og.jpg?raw=true",
    },
    {
      name: "TA Portal",
      description: "Handling all TA related tasks",
      info: "https://github.com/devlup-labs/ta_portal",
      info1: "Handling all Teaching Assistamt related tasks for our Institute.",
      weblink: "",
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVUokMmObEY9-lO8jqGw1Ho4gfPFl3Zq0MLxLjCVBde3mMOlO&s",
      image2:
        "https://media-exp1.licdn.com/dms/image/C510BAQHv-yIwmkOqcg/company-logo_200_200/0?e=1600905600&v=beta&t=4deL_GIuOnGrlXcYPvLHzJDlWyiuUH-3Po6iX2bJO2Y",
    },
    {
      name: "WOC ",
      description: "Winter of Code",
      info: "https://github.com/devlup-labs/woc",
      info1:
        "Main website for Winter Of Code Projects for budding open source enthusiasts.",
      weblink: "",
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVUokMmObEY9-lO8jqGw1Ho4gfPFl3Zq0MLxLjCVBde3mMOlO&s",
    },
    {
      name: "Souvenirs",
      description: "Souvenirs IIT Jodhpur",
      info: "devlup-labs.github.io/souvenirs_iitj/",
      info1:
        "A website for Student Design and Arts Society, IIT Jodhpur aimed at providing the photos of events in institute to its residents",
      weblink: "https://devluplabs.tech/souvenirs_iitj/",
      image1: "https://i.imgur.com/jkS5dSR.png",
    },
    {
      name: "Chrome Extension",
      description: "Chrome extension to auto join classes",
      info: "https://github.com/devlup-labs/meet-scheduler",
      info1:
        "A chrome extension that lets you manage your google meet links and time and lets you auto join them.",
      weblink:
        "https://chrome.google.com/webstore/detail/auto-join-chrome-extensio/djlpjopjnkojimgiaefgbenbbkkknnln?hl=en",
      image1:
        "https://drive.google.com/uc?export=download&id=1nNXoqJcSzUfwSjlE9nWDzXZT41klJdNT",
    },
    {
      name: "Stopstalk App",
      description: "A cross-platform app for Stopstalk website",
      info: "https://github.com/devlup-labs/stopstalk-android",
      info1:
        "A cross-platform app to track competitive programming progress of an individual.",
      weblink: "",
      image1:
        "https://drive.google.com/uc?export=download&id=1Nng2HBNNR7ta11gG744wRqOGaCF9L1Il",
    },
    {
      name: "Prometeo App",
      description: "Official App of the Annual College Tech Fest",
      info: "https://github.com/devlup-labs/prometeo-23-app",
      info1:
        "Main app for the technical + entrepreneurial fest of IIT Jodhpur, Prometeo.",
      weblink: "",
      image1: "https://prometeo.in/static/media/logo.074b71967bcaff259918.gif",
    },
    {
      name: "Ignus Website",
      description: "Official website of the Annual College Cultural Fest",
      info: "https://github.com/devlup-labs/Ignus-23",
      info1:
        "Main web portal for the annual cultural fest of IIT Jodhpur, Ignus.",
      weblink: "https://ignus.co.in/",
      image1: "https://ignus.co.in/static/ignus%20icon.png",
    },
    {
      name: "Auto Form Submit",
      description:
        "A chrome extension that allows to set alarm for google forms",
      info: "devlup-labs/auto-submit-quiz",
      info1:
        "The extension allows you to set an alarm for a Google form that you may wish to complete in the future before the deadline. You may also use it to auto-submit a Google Form that has been assigned to you in the Google Classroom.",
      weblink:
        "https://chrome.google.com/webstore/detail/google-forms-autosubmit/kkecpckbpgmoceclgfclfjellanlppda?hl=en-GB",
      image1:
        "https://lh3.googleusercontent.com/OcUd6-y8FHVCa8wtpUcBYhTsUZzKum65tGrdoONBJ6lN2sENIueXBHV-Mkk_phSV8loogk-OPHi7bKt7cowZhzyI=w128-h128-e365-rj-sc0x00ffffff",
    },
    {
      name: "Unified Fest Backend",
      description: "The backend for the fest website",
      info: "https://github.com/devlup-labs/fest-backend-iitj.git",
      info1:
        "A backend template created for college festivals to streamline the web development process and avoid repetitive work.",
      weblink: "",
      image1: "https://i.imgur.com/Wh5uZij.png",
    },
    {
      name: "Spok",
      description: "",
      info: "",
      info1: "",
      weblink: "",
      image1: "",
    },
    {
      name: "Family Tree",
      description: "",
      info: "",
      info1: "",
      weblink: "https://devluplabs.iitj.ac.in/familytree/",
      image1: "",
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
        PROJECT
      </div>
      </div>
    <div className="p-8 pl-[20%] pr-[20%] max-sm:px-[5%] max-md:px-[5%] max-lg:px-[10%] max-xl:px-[10%]">
      <div className="flex gap-20  grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {Projects.map((data, index) => (
          <Card className="py-4" key={index}>
            <CardHeader className="pb-0 pt-0 px-4 flex-col items-center">
              <h4 className="font-bold text-large">{data.name}</h4>
            </CardHeader>

            <CardBody className="overflow-visible py-2 items-center flex">
              <Image
                alt="Card background"
                className="object-cover rounded-xl "
                src={data.image1}
                // width={270}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{data.info1}</p>
              <small className="text-default-500">{data.description}</small>
            </CardHeader>
            <CardHeader className="flex justify-around m-2">
              <a href={data.info} target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
              <a href={data.weblink} target="_blank" rel="noopener noreferrer">
                <TbWorld size={30} />
              </a>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
}
