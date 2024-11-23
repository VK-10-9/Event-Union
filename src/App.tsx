import React from 'react';
import { 
  Users, Globe, Calendar, ArrowRight, 
  Network, TrendingUp, Zap, 
  Settings, Users2, Share2 
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  const features = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Networking",
      description: "Build meaningful connections with event organizers and enthusiasts worldwide."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increase",
      description: "Boost your event's reach and attendance through our global platform."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Efficiency",
      description: "Streamline your event management process with our intuitive tools."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Resource Optimization",
      description: "Maximize your resources with smart event planning and management features."
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Peer Support",
      description: "Get guidance and support from experienced event organizers in our community."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Online Collaboration",
      description: "Work seamlessly with your team and partners in real-time."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Community",
      description: "Join a diverse community of event enthusiasts from around the world."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Worldwide Events",
      description: "Discover and participate in events from every corner of the globe."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event Management",
      description: "Powerful tools to organize, manage, and promote your events effectively."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950">
      <Navbar />
      <Hero />
      <Features features={features} />
      <Team />
      <Footer />
    </div>
  );
}