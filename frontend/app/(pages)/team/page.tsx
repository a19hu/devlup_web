"use client";
import React, { useEffect, useState } from "react";
import TeamMemberCard, { TeamMember } from "@/components/TeamMemberCard";

const TeamPage: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_SERVER_URL;

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/fetch-members/`);
        if (!response.ok) throw new Error("Failed to fetch team members");
        const data: TeamMember[] = await response.json();
        // Filter out alumni
        setTeamMembers(data.filter((m) => m.role.toLowerCase() !== "alumni"));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
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
        <div className="text-4xl mb-10 font-black text-white">CURRENT TEAM</div>
      </div>

      {loading && <div className="text-center p-8">Loading...</div>}
      {error && <div className="text-center text-red-500 p-8">{error}</div>}

      {!loading && !error && (
        <div className="flex flex-wrap justify-center items-stretch gap-8 p-8" style={{gap:"24px",padding:"24px"}}>
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col w-[300px] h-full">
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
      
      )}
    </>
  );
};

export default TeamPage;
