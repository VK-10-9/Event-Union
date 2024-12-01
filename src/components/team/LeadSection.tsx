import React from 'react';

interface Lead {
  name: string;
  role: string;
  college?: string;
  zone?: string;
  socialLinks?: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

interface LeadSectionProps {
  title: string;
  leads: Lead[];
}

export default function LeadSection({ title, leads }: LeadSectionProps) {
  return (
    <div className="space-y-8 sm:space-y-12">
      <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {leads.map((lead) => (
          <div
            key={lead.name}
            className="bg-blue-950/20 rounded-xl p-6 border border-blue-900/20 hover:border-blue-500/30 transition-all duration-300"
          >
            <h4 className="text-lg font-semibold text-white mb-2">{lead.name}</h4>
            <p className="text-blue-400 text-sm mb-3">{lead.role}</p>
            {lead.college && (
              <p className="text-gray-400 text-sm mb-2">{lead.college}</p>
            )}
            {lead.zone && (
              <p className="text-gray-400 text-sm mb-2">{lead.zone}</p>
            )}
            {lead.socialLinks && lead.socialLinks.length > 0 && (
              <div className="flex gap-3 mt-4">
                {lead.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <img
                      src={link.icon}
                      alt={link.platform}
                      className="w-5 h-5 opacity-75 hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
</boltArtifact>

<boltArtifact id="update-team-component" title="Update Team component with new sections">
<boltAction type="file" filePath="src/components/Team.tsx">
import React from 'react';
import { ProfileSection } from './ProfileSection';
import LeadSection from './team/LeadSection';

export default function Team() {
  const coFounders = [
    {
      name: 'Vishwanath K',
      role: 'Co-Founder',
      profession: 'Technical Lead',
      image: 'https://i.ibb.co/ctdykGT/your-image.jpg',
      description: 'Leading the technical vision and development of Event Union. Passionate about creating innovative solutions for event management.',
      location: 'Bengaluru, Karnataka',
      email: 'vishwanath@eventunion.co',
      socialLinks: [
        {
          platform: 'GitHub',
          url: 'https://github.com/VK-10-9',
          icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
        },
        {
          platform: 'LinkedIn',
          url: 'https://linkedin.com/in/vishwanath-koliwad-02514631b',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: 'Arnav Goyal',
      role: 'Co-Founder',
      profession: 'Business Strategy',
      image: 'https://static.wixstatic.com/media/bcd64e_957bc8b7d16c406eab62b7f30c3a9f84~mv2.png',
      description: 'Driving business strategy and growth at Event Union. Focused on building meaningful connections in the event industry.',
      location: 'Bengaluru, Karnataka',
      email: 'arnav@eventunion.co',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/arnav2580/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        },
        {
          platform: 'GitHub',
          url: 'https://github.com/Arnav2580',
          icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
        }
      ]
    }
  ];

  const coreTeam = [
    {
      name: 'Rahul Shashtri',
      role: 'Core Team',
      profession: 'Marketing',
      image: 'https://static.wixstatic.com/media/bcd64e_1cdc6f8800db4fdea8f42ec434591e01~mv2.jpg',
      description: 'Leading marketing initiatives and brand development at Event Union.',
      location: 'Bengaluru, Karnataka',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/rahul-shastri-a84228318/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: 'Mukul Kashyap',
      role: 'Core Team',
      profession: 'Technical Lead',
      image: 'https://static.wixstatic.com/media/bcd64e_b714b6c1112d4487a3ae4ae66b6291e1~mv2.png/v1/fill/w_224,h_231,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.png',
      description: 'Developing and maintaining the technical infrastructure of Event Union.',
      location: 'Bengaluru, Karnataka',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mukul-kashyap-10703a30a/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        },
        {
          platform: 'GitHub',
          url: 'https://github.com/GitH-Mukul',
          icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
        }
      ]
    },
    {
      name: 'Shashank Patil',
      role: 'Core Team',
      profession: 'Marketing',
      image: 'https://static.wixstatic.com/media/bcd64e_c3c3ac82c27345a4a9a8b1719f68f2c9~mv2.png',
      description: 'Managing marketing campaigns and user engagement strategies.',
      location: 'Bengaluru, Karnataka',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/shashank-patil-232881315/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: 'Himanshu Sharma',
      role: 'Core Team',
      profession: 'Product Manager',
      image: 'https://static.wixstatic.com/media/bcd64e_3b851cc01bc0403cb8d4fa738341df14~mv2.png',
      description: 'Overseeing product development and user experience optimization.',
      location: 'Bengaluru, Karnataka',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/himanshu-sharma-72a590272/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: 'Pranav Darekar',
      role: 'Core Team',
      profession: 'Business Development',
      image: 'https://static.wixstatic.com/media/bcd64e_37878ffa8d3e4ebeb10f9ed8e3f16219~mv2.jpg',
      description: 'Driving business growth and partnership development initiatives.',
      location: 'Bengaluru, Karnataka',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/pranav-darekar/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        },
        {
          platform: 'GitHub',
          url: 'https://github.com/Skywalker1080',
          icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
        }
      ]
    }
  ];

  const clgLeads = [
    {
      name: "Vansh Goel ",
      role: "College Lead",
      college: "IIT Gandhinagar, Gujarat ",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/vansh-goel-148007312',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: "Vedanta Nalwad",
      role: "College Lead",
      college: "KLE IT, Hubli",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/vedanta-nalwad-956b12334/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: "Spoorti Umathar",
      role: "College Lead",
      college: "KLE Tech, Bangalore",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/shreya-bhat-906239227',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    }
{
      name: "G P LEKHANA",
      role: "College Lead",
      college: "SDM COLLEGE OF ENGINEERING AND TECHNOLOGY, Dharwad ",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/g-p-lekhana-440471301/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
{
      name: "Rahul Shastri ",
      role: "College Lead",
      college: "PES university, Bengaluru ",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/rahul-shastri-a84228318/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
  {
      name: "Bhavika Chaudhary",
      role: "College Lead",
      college: "Vistula University, Warsaw Poland ",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'www.linkedin.com/in/bhavikach25',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
  
  ];

  const zonalLeads = [
    {
      name: "Bhavika Chaudhary",
      role: "Zonal Lead",
      zone: "Global ,Poland",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/rahul-kumar-906239227',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: "Vansh Goel",
      role: "Zonal Lead",
      zone: "Gujarat",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/priya-sharma-906239227',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: "Aditya Verma",
      role: "Zonal Lead",
      zone: "East Bangalore",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/aditya-verma-906239227',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    }
  ];

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
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Co-Founders</h3>
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
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Core Team</h3>
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
          <LeadSection title="College Leads" leads={clgLeads} />
        </div>

        {/* Zonal Leads Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <LeadSection title="Zonal Leads" leads={zonalLeads} />
        </div>
      </div>
    </div>
  );
}
</boltArtifact>

I've made the following improvements:

1. Created a new `LeadSection` component to handle both College and Zonal leads
2. Added sample data for College and Zonal leads (you can replace with actual data)
3. Improved the layout and styling for better visual hierarchy
4. Added social links support for each lead
5. Made the cards interactive with hover effects
6. Ensured responsive design across all screen sizes
7. Maintained consistent styling with the rest of the team section

The leads are now displayed in a grid layout with clean, minimal cards that show:
- Name
- Role
- College/Zone
- Social links (if available)

Each card has a subtle hover effect and maintains the same design language as the rest of the website. You can easily update the `clgLeads` and `zonalLeads` arrays in the Team component with your actual team members'
