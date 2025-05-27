import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  year: number;
  email: string;
  github: string;
  linkedin: string;
  description: string | null;
  photo: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => (
  <Card
    isBlurred
    className="border-none bg-white/80 dark:bg-default-100/80 p-[32px] shadow-lg hover:scale-105 transition-transform duration-300"
    shadow="lg"
    key={member.id}
  >
    <CardBody>
      <div className="flex flex-col items-center text-center h-full">
        <div className="relative mb-4">
          <Image
            alt={member.name}
            className="object-cover rounded-full border-4 border-blue-400 shadow-lg"
            src={member.photo || "https://nextui.org/images/album-cover.png"}
            width={120}
            height={120}
          />
        </div>
        <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-300">{member.name}</h1>
        <p className="text-base font-medium text-blue-500 mb-1">{member.role} <span className="text-gray-400">|</span> {member.year}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {member.description || "No description provided."}
        </p>
        <div className="flex gap-4 mt-auto">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition"
            >
              <FaLinkedin size={24} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              title="Email"
              className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 transition"
            >
              <svg width={24} height={24} fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.94 5.11A2 2 0 0 1 4.5 4h11a2 2 0 0 1 1.56.72l-7.06 5.65a1 1 0 0 1-1.25 0L2.94 5.11zM18 6.08V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.08l7.47 5.98a3 3 0 0 0 3.06 0L18 6.08z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </CardBody>
  </Card>
);

export default TeamMemberCard;
