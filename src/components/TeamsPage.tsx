import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Snowfall from './Snowfall';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1742119897876-67e9935ac375?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-blue-400 via-cyan-400 to-teal-400'
  },
  {
    name: 'Sarah Kumar',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-purple-400 via-pink-400 to-rose-400'
  },
  {
    name: 'Michael Lee',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-indigo-400 via-purple-400 to-pink-400'
  },
  {
    name: 'Priya Sharma',
    role: 'Events Coordinator',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-teal-400 via-cyan-400 to-blue-400'
  },
  {
    name: 'Ryan Davis',
    role: 'Marketing Lead',
    image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-orange-400 via-amber-400 to-yellow-400'
  },
  {
    name: 'Maya Patel',
    role: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-pink-400 via-rose-400 to-red-400'
  },
  {
    name: 'James Wilson',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-cyan-400 via-blue-400 to-indigo-400'
  },
  {
    name: 'Lisa Wang',
    role: 'Design Head',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-violet-400 via-purple-400 to-fuchsia-400'
  },
  {
    name: 'David Kim',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1742119897876-67e9935ac375?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-emerald-400 via-teal-400 to-cyan-400'
  },
  {
    name: 'Emma Brown',
    role: 'Partnerships Lead',
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-rose-400 via-pink-400 to-purple-400'
  },
  {
    name: 'Noah Garcia',
    role: 'Developer Advocate',
    image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-blue-400 via-indigo-400 to-violet-400'
  },
  {
    name: 'Olivia Martin',
    role: 'Community Outreach',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=400',
    linkedin: 'https://linkedin.com',
    gradient: 'from-amber-400 via-orange-400 to-red-400'
  }
];

export default function TeamsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-cyan-50/50">
      <Navbar />
      <Snowfall />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Winter background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-100"></div>

          {/* Animated orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-sky-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-blue-700 via-cyan-700 to-slate-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The amazing people behind Community MeetUps who make it all possible
          </motion.p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card with glassmorphism */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-white/50 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  {/* Simple gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Image Container */}
                  <div className="relative w-full h-80 overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Simple overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* LinkedIn Icon - appears on hover */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#0A66C2] hover:shadow-lg z-10 group/linkedin"
                    >
                      <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover/linkedin:text-white transition-colors" />
                    </a>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 text-center">
                    <h3 className="text-xl md:text-2xl mb-2">
                      {member.name}
                    </h3>

                    <p className={`text-sm md:text-base text-gray-600`}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-white/50 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-blue-700 via-cyan-700 to-slate-700 bg-clip-text text-transparent">
              Join Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We're always looking for passionate individuals to join our community
            </p>
            <motion.button
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 10px 40px rgba(139, 92, 246, 0.3)',
                  '0 10px 60px rgba(236, 72, 153, 0.5)',
                  '0 10px 40px rgba(139, 92, 246, 0.3)'
                ]
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity }
              }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}