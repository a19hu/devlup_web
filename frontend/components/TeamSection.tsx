import React from "react";
import TeamMemberCard, { TeamMember } from "./TeamMemberCard";

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => (
  <section className="team-section my-8">
    <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
    {members.length > 0 ? (
      <div className="flex flex-wrap gap-8 justify-center p-8">
        {members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500">No {title.toLowerCase()} found.</p>
    )}
  </section>
);

export default TeamSection;
