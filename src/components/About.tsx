import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const gridImages = [
  'https://images.unsplash.com/photo-1758270705654-bd043ed13d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1662657138446-4c58d87881c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1558301204-e3226482a77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1650094983020-89c3dfa9ce0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1544531585-f14f463149ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1690192203795-ca12d9bb3227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
];

// Mini avatars data
const miniAvatars = [
  { color: 'bg-gradient-to-br from-blue-600 to-cyan-600' },
  { color: 'bg-gradient-to-br from-cyan-600 to-teal-600' },
  { color: 'bg-gradient-to-br from-teal-600 to-blue-600' },
  { color: 'bg-gradient-to-br from-slate-600 to-blue-600' },
  { color: 'bg-gradient-to-br from-blue-600 to-teal-600' }
];

export default function About() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-slate-50/30 via-blue-50/30 to-cyan-50/30">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-cyan-100/20 to-teal-100/20 animate-gradient"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              {gridImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Community moment ${index + 1}`}
                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredImage === index ? 'scale-110' : 'scale-100'}`}
                  />
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent transition-opacity duration-300 ${hoveredImage === index ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 relative">
            <h2 className="text-5xl bg-gradient-to-r from-blue-700 via-cyan-700 to-teal-700 bg-clip-text text-transparent">
              About Community MeetUP
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a passionate community of student developers, designers, and innovators dedicated to fostering growth through hackathons, workshops, and networking events.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to empower students with the skills, connections, and opportunities they need to excel in the tech industry. From beginner-friendly workshops to advanced hackathons, we create spaces where learning meets collaboration.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="group bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-600">Events Hosted</div>
              </div>
              <div className="group bg-white rounded-2xl p-6 border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="text-3xl mb-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
            
            {/* Mini Avatars Row */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-3">
                {miniAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 rounded-full ${avatar.color} border-3 border-white shadow-md hover:scale-110 transition-transform cursor-pointer hover:z-10 relative`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 ml-2">
                Join 10,000+ members today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}