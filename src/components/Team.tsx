import React from 'react';
import { ProfileSection } from './ProfileSection';
import { LeadSection } from './team/LeadSection';
import { coFounders } from '../data/team/coFounders';
import { coreTeam } from '../data/team/coreTeam';
import { collegeLeads, zonalLeads } from '../data/team/leads';

export default function Team() {
  return (
    <div className="py-12 sm:py-16 md:py-24 bg-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Meet Our Team
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300">
            The passionate minds behind Event Union
          </p>
        </div>

        {/* Co-Founders Section */}
        <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
            Co-Founders
          </h3>
          <div className="grid gap-6 sm:gap-8">
            {coFounders.map((member) => (
              <ProfileSection
                key={member.name}
                name={member.name}
                title={member.profession}
                description={member.description}
                imageUrl={member.image}
                location={member.location}
                email={member.email}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>

        {/* Core Team Section */}
        <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
            Core Team
          </h3>
          <div className="grid gap-6 sm:gap-8">
            {coreTeam.map((member) => (
              <ProfileSection
                key={member.name}
                name={member.name}
                title={member.profession}
                description={member.description}
                imageUrl={member.image}
                location={member.location}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>

        {/* College Leads Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <LeadSection
            title="College Leads"
            description="Our dedicated representatives driving community growth across educational institutions"
            leads={collegeLeads}
          />
        </div>

        {/* Zonal Leads Section */}
        <div>
          <LeadSection
            title="Zonal Leads"
            description="Regional leaders coordinating community initiatives across Bangalore"
            leads={zonalLeads}
          />
        </div>
      </div>
    </div>
  );
}
