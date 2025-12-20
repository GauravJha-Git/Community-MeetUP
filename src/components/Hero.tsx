import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import HeroSnowfall from './HeroSnowfall';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const title = "Community MeetUps";

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 min-h-[80vh] sm:min-h-screen flex items-center">
      {/* Hero Snowfall Animation */}
      <HeroSnowfall />

      {/* Winter-themed Animated Background - Alto's Adventure Style */}
      <div className="absolute inset-0 -z-10">
        {/* Base winter gradient - soft bluish white */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-100"></div>

        {/* Gentle animated gradient orbs - winter colors */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Soft blue orb */}
          <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-300/30 rounded-full blur-3xl animate-blob-enhanced"
            style={{
              boxShadow: '0 0 100px rgba(59, 130, 246, 0.2)',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }} />

          {/* Gentle cyan orb */}
          <div className="absolute top-0 -right-20 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-sky-300/30 rounded-full blur-3xl animate-blob-enhanced animation-delay-2000"
            style={{
              boxShadow: '0 0 100px rgba(34, 211, 238, 0.2)',
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.015}px)`
            }} />

          {/* Soft lavender orb */}
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-indigo-200/20 rounded-full blur-3xl animate-blob-enhanced animation-delay-4000"
            style={{
              boxShadow: '0 0 100px rgba(139, 92, 246, 0.15)',
              transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * -0.01}px)`
            }} />

          {/* Gentle white-blue orb */}
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-slate-200/30 to-blue-200/30 rounded-full blur-3xl animate-blob-enhanced animation-delay-6000"
            style={{
              boxShadow: '0 0 100px rgba(148, 163, 184, 0.2)',
              transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.012}px)`
            }} />
        </div>

        {/* Alto's Adventure style - animated rolling hills */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Far back hill - slowest movement */}
          <motion.div
            className="absolute bottom-0 left-0 w-[200%] h-64 bg-gradient-to-b from-blue-100/40 to-blue-200/60"
            style={{
              clipPath: 'polygon(0 60%, 10% 40%, 25% 50%, 40% 35%, 55% 45%, 70% 30%, 85% 40%, 100% 35%, 100% 100%, 0 100%)',
            }}
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Middle hill - medium speed */}
          <motion.div
            className="absolute bottom-0 left-0 w-[200%] h-48 bg-gradient-to-b from-cyan-100/50 to-cyan-200/70"
            style={{
              clipPath: 'polygon(0 70%, 15% 50%, 30% 60%, 45% 45%, 60% 55%, 75% 40%, 90% 50%, 100% 45%, 100% 100%, 0 100%)',
            }}
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Front hill - fastest movement */}
          <motion.div
            className="absolute bottom-0 left-0 w-[200%] h-32 bg-gradient-to-b from-slate-100/60 to-slate-200/80"
            style={{
              clipPath: 'polygon(0 80%, 20% 60%, 35% 70%, 50% 55%, 65% 65%, 80% 50%, 95% 60%, 100% 55%, 100% 100%, 0 100%)',
            }}
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Snow pile at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-blue-50/80 to-transparent">
          <div className="absolute inset-0">
            {/* Snow sparkles */}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/20" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Main Heading - No Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              scale: { type: "spring", stiffness: 100, damping: 10 }
            }}
            className="space-y-4 flex justify-center"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl tracking-tight leading-tight whitespace-nowrap text-center bg-gradient-to-r from-blue-700 via-cyan-700 to-slate-700 bg-clip-text text-transparent">
              Community MeetUps
            </h1>
          </motion.div>

          {/* Animated Tagline - Single Line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <motion.div
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(99, 102, 241, 0.2)',
                  '0 0 30px rgba(168, 85, 247, 0.4)',
                  '0 0 20px rgba(99, 102, 241, 0.2)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-sm text-indigo-700">Where Innovation Meets Community</p>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 flex flex-wrap justify-center gap-x-2 gap-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100
              }}
            >
              <span className="whitespace-nowrap">
                We{' '}
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Connect
                </motion.span>
              </span>
              <span className="whitespace-nowrap">
                {'. We '}
                <motion.span
                  className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Build
                </motion.span>
              </span>
              <span className="whitespace-nowrap">
                {'. We '}
                <motion.span
                  className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Grow
                </motion.span>
              </span>
            </motion.h2>
          </motion.div>

          {/* Animated Description with character stagger */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
          >
            {Array.from("Join a vibrant community of tech enthusiasts, developers, and innovators. Learn, collaborate, and grow together.").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.03, delay: 1.1 + index * 0.01 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* Animated CTA Buttons with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 pt-6 justify-center px-4"
          >
            <motion.button
              className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden transition-all text-base sm:text-lg w-full sm:w-auto"
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
              <span className="relative z-10 flex items-center justify-center gap-2">
                Join Community
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <Link to="/events" className="w-full sm:w-auto">
              <motion.button
                className="group relative w-full px-8 sm:px-10 py-4 sm:py-5 rounded-full border-2 border-indigo-600 text-indigo-600 transition-all text-base sm:text-lg overflow-hidden"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.05)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Events
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Animated Stats Highlight with enhanced pulse */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="flex flex-wrap gap-8 justify-center pt-10 text-sm"
          >
            {[
              { count: '10,000+ Members', gradient: 'from-blue-600 to-cyan-600', delay: 0 },
              { count: '20+ Events', gradient: 'from-purple-600 to-pink-600', delay: 1 },
              { count: '50+ Partners', gradient: 'from-teal-600 to-blue-600', delay: 2 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${stat.gradient}`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: stat.delay
                  }}
                />
                <span className="text-gray-600">{stat.count}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}