import React from 'react';
import { ProfileSection } from './ProfileSection';

export default function Team() {
  const coFounders = [
    {
      name: 'Vishwanath K',
      role: 'Co-Founder',
      profession: 'Technical Lead',
      image: 'https://i.ibb.co/tmBQPYc/profile-pic.jpg',
      description: 'Leading the technical vision and development of Event Union. Passionate about creating innovative solutions for event management.',
      location: 'Bengaluru, Karnataka',
      email: 'vishwanath@eventunion.co',
      socialLinks: [
        {
          platform: 'GitHub',
          url: 'https://github.com/VK-10-9',
          icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        },
        {
          platform: 'LinkedIn',
          url: 'https://linkedin.com/in/vishwanath-koliwad-02514631b',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png',
        },
      ],
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
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png',
        },
        {
          platform: 'GitHub',
          url: 'https://github.com/Arnav2580',
          icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        },
      ],
    },
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
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png',
        },
      ],
    },
    {
      name: 'Mukul Kashyap',
      role: 'Core Team',
      profession: 'Technical Lead',
      image: 'https://static.wixstatic.com/media/bcd64e_d4624a661fc64829afa308dbf9c3fbf4~mv2.png',
      description: 'Developing and maintaining the technical infrastructure of Event Union.',
      location: 'Bengaluru, Karnataka',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mukul-kashyap-10703a30a/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png',
        },
        {
          platform: 'GitHub',
          url: 'https://github.com/GitH-Mukul',
          icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        },
      ],
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
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png',
        },
      ],
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
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png',
        },
      ],
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
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png',
        },
        {
          platform: 'GitHub',
          url: 'https://github.com/Skywalker1080',
          icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        },
      ],
    },
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
        <div className="space-y-8 sm:space-y-12">
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
      </div>
    </div>
  );
}
