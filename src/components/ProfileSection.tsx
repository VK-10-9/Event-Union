import React from 'react';

interface ProfileSectionProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

export function ProfileSection({ name, title, description, imageUrl }: ProfileSectionProps) {
  return (
    <article className="text-center lg:text-left">
      <div className="w-48 h-48 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden ring-4 ring-blue-900/30 shadow-2xl">
        <img
          src={imageUrl}
          alt={`${name} - ${title}`}
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces&auto=format&q=80';
          }}
        />
      </div>
      <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">{name}</h1>
      <p className="text-blue-400 text-xl lg:text-2xl mb-4">{title}</p>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </article>
  );
}