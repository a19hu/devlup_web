"use client";
import React, { useState, } from "react";
import { FaCalendarAlt, FaTrophy, FaClock } from "react-icons/fa";
import {Card, CardBody, Image} from "@nextui-org/react";
// components/Timeline.js
export default function Timeline() {
  const [events, setEvents] = useState([
    {
      id: 1,
      date: "2023-01-15",
      title: "Project Kickoff",
      description: "Initiated the new product development project",
      type: "milestone",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      date: "2023-03-01",
      title: "Prototype Completed",
      description: "Finished the initial prototype for client review",
      type: "achievement",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      date: "2023-05-20",
      title: "Client Presentation",
      description: "Presented the final product to the client",
      type: "deadline",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ]);

  const [expandedEvent, setExpandedEvent] = useState(null);

  const getEventIcon = (type: string) => {
    switch (type) {
      case "milestone":
        return <FaCalendarAlt className="text-blue-500" />;
      case "achievement":
        return <FaTrophy className="text-yellow-500" />;
      case "deadline":
        return <FaClock className="text-red-500" />;
      default:
        return null;
    }
  };

  const toggleExpand = (id) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  return (
    <>
     <div 
      className="flex justify-center items-center"
      style={{
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",height:"200px"
      }}
      >
      <div className="flex justify-center text-4xl  mb-10 font-black text-white ">
      Project Timeline
      </div>
      </div>
    <div className="container mx-auto p-4">
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-25 h-20 rounded-full">
              <h1 className="mx-auto font-semibold  text-white">{event.date}</h1>
            </div>
            <div
              className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 ${
                expandedEvent === event.id ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <h3 className="mb-3 font-bold text-gray-800 text-xl">{event.title}</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                {event.date}
              </p>
              <button
                onClick={() => toggleExpand(event.id)}
                className="mt-3 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                aria-expanded={expandedEvent === event.id}
                aria-controls={`event-details-${event.id}`}
              >
                {expandedEvent === event.id ? "Hide Details" : "Show Details"}
              </button>
              {expandedEvent === event.id && (
                <div id={`event-details-${event.id}`} className="mt-4">
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};