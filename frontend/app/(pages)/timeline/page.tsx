"use client";
import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaTrophy, FaClock, FaFilePdf, FaYoutube } from "react-icons/fa";
import { Card, CardBody, Image } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

// Define TypeScript interface for timeline data
interface TimelineEvent {
  id?: number;
  name: string;
  discription: string;
  date: string;
  picture: string | null;
  pdf: string | null;
  youtube: string | null;
}

export default function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  useEffect(() => {
    const fetchTimelineEvents = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/timeline`);
        
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch timeline events");
        console.error("Error fetching timeline events:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTimelineEvents();
  }, []);

  const getEventIcon = (index: number) => {
    const iconTypes = ["milestone", "achievement", "deadline"];
    const type = iconTypes[index % iconTypes.length];

    switch (type) {
      case "milestone":
        return <FaCalendarAlt className="text-blue-500" />;
      case "achievement":
        return <FaTrophy className="text-yellow-500" />;
      case "deadline":
        return <FaClock className="text-red-500" />;
      default:
        return <FaCalendarAlt className="text-gray-500" />;
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const eventVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 10 
      }
    }
  };

  const detailsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      }
    },
    exit: { 
      height: 0, 
      opacity: 0,
      transition: { 
        duration: 0.2, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <>
      <motion.div 
        className="flex justify-center items-center"
        style={{
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
          height:"200px"
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="flex justify-center text-4xl mb-10 font-black text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Project Timeline
        </motion.div>
      </motion.div>
      
      <div className="container mx-auto p-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Loading timeline events...
            </motion.p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-40">
            <motion.p 
              className="text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Error: {error}
            </motion.p>
          </div>
        ) : (
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={`mb-8 flex justify-between items-center w-full ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
                variants={eventVariants}
              >
                <div className="order-1 w-5/12"></div>
                <motion.div 
                  className="z-20 flex items-center order-1 bg-gray-800 px-4 shadow-xl w-25 h-20 rounded-full"
                  variants={circleVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  <h1 className="mx-auto font-semibold text-white">{formatDate(event.date)}</h1>
                </motion.div>
                <motion.div
                  className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 ${
                    expandedEvent === index ? "ring-2 ring-blue-500" : ""
                  }`}
                  whileHover={{ 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                >
                  <h3 className="mb-3 font-bold text-gray-800 text-xl flex items-center gap-2">
                    {getEventIcon(index)} {event.name}
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                    {formatDate(event.date)}
                  </p>
                  <motion.button
                    onClick={() => toggleExpand(index)}
                    className="mt-3 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                    aria-expanded={expandedEvent === index}
                    aria-controls={`event-details-${index}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedEvent === index ? "Hide Details" : "Show Details"}
                  </motion.button>
                  
                  <AnimatePresence>
                    {expandedEvent === index && (
                      <motion.div 
                        id={`event-details-${index}`} 
                        className="mt-4 overflow-hidden"
                        variants={detailsVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <p className="text-gray-700 mb-4">{event.discription}</p>
                        
                        {event.picture && (
                          <motion.img
                            src={event.picture}
                            alt={event.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          />
                        )}
                        
                        <motion.div 
                          className="flex gap-4 mt-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {event.pdf && (
                            <motion.a 
                              href={event.pdf} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-red-600 hover:text-red-800"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaFilePdf /> View PDF
                            </motion.a>
                          )}
                          
                          {event.youtube && (
                            <motion.a 
                              href={event.youtube} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-red-600 hover:text-red-800"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaYoutube /> Watch Video
                            </motion.a>
                          )}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
}
