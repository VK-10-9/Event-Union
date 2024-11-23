import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  profession: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export default function Team() {
  const coFounders = [
    {
      name: 'Vishwanath K',
      role: 'Co-Founder',
      profession: 'Computer Science Student',
      image: 'https://i.ibb.co/ctdykGT/your-image.jpg',
      social: {
        github: 'https://github.com/VK-10-9',
        linkedin: 'https://linkedin.com/in/vishwanath-koliwad-02514631b',
      },
    },
    {
      name: 'Arnav Goyal',
      role: 'Co-Founder',
      profession: "Computer Science Student",
      image:
        'https://static.wixstatic.com/media/bcd64e_957bc8b7d16c406eab62b7f30c3a9f84~mv2.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/arnav2580/',
        github: 'https://github.com/Arnav2580',
      },
    },
  ];

  const coreTeam = [
    {
      name: 'Rahul Shashtri',
      role: 'Core Team',
      profession: 'Marketing',
      image:
        'https://static.wixstatic.com/media/bcd64e_1cdc6f8800db4fdea8f42ec434591e01~mv2.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/rahul-shastri-a84228318/',
        github: '#',
      },
    },
    {
      name: 'Mukul Kashyap',
      role: 'Core Team',
      profession: 'Technical Lead',
      image:
        'https://static.wixstatic.com/media/bcd64e_d4624a661fc64829afa308dbf9c3fbf4~mv2.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/mukul-kashyap-10703a30a/',
        github: 'https://github.com/GitH-Mukul',
      },
    },
    {
      name: 'Shashank Patil',
      role: 'Core Team',
      profession: 'Marketing',
      image:
        'https://static.wixstatic.com/media/bcd64e_c3c3ac82c27345a4a9a8b1719f68f2c9~mv2.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/shashank-patil-232881315/',
        github: '#',
      },
    },
    {
      name: 'Himanshu Sharma',
      role: 'Core Team',
      profession: 'Product Manager',
      image:
        'https://static.wixstatic.com/media/bcd64e_3b851cc01bc0403cb8d4fa738341df14~mv2.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/himanshu-sharma-72a590272/',
        github: '#',
      },
    },
    {
      name: 'Pranav Darekar',
      role: 'Core Team',
      profession: 'Business Development',
      image:
        'https://static.wixstatic.com/media/bcd64e_37878ffa8d3e4ebeb10f9ed8e3f16219~mv2.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/pranav-darekar/',
        github: 'https://github.com/Skywalker1080',
      },
    },
  ];

  return (
    <div className="py-24 bg-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            The passionate minds behind Event Union
          </p>
        </div>

        {/* Co-Founders Section */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {coFounders.map((member, index) => (
            <div
              key={index}
              className="bg-gray-950/50 rounded-xl p-6 border border-blue-900/20 shadow-lg"
              style={{ width: '280px', height: '420px' }}
            >
              <div className="h-2/3 flex items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mt-4">
                {member.name}
              </h3>
              <p className="text-blue-400 font-medium">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.profession}</p>
              <div className="mt-4 flex justify-center space-x-4">
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="GitHub"
                      className="h-6 w-6"
                    />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                      alt="LinkedIn"
                      className="h-6 w-6"
                    />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                      alt="Twitter"
                      className="h-6 w-6"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Core Team Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((member, index) => (
            <div
              key={index}
              className="bg-gray-950/50 rounded-xl p-6 border border-blue-900/20 shadow-lg"
              style={{ width: '280px', height: '420px' }}
            >
              <div className="h-2/3 flex items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mt-4">
                {member.name}
              </h3>
              <p className="text-blue-400 font-medium">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.profession}</p>
              <div className="mt-4 flex justify-center space-x-4">
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="GitHub"
                      className="h-6 w-6"
                    />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                      alt="LinkedIn"
                      className="h-6 w-6"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
