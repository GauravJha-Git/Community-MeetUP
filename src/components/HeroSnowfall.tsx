import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  type: 'circle' | 'star' | 'crystal' | 'detailed';
}

export default function HeroSnowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate 60 snowflakes for hero section
    const flakes: Snowflake[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 8 + 8, // Larger flakes 8-16px (more visible)
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 8,
      drift: (Math.random() - 0.5) * 200,
      type: (() => {
        const rand = Math.random();
        if (rand > 0.75) return 'detailed';
        if (rand > 0.5) return 'star';
        if (rand > 0.25) return 'crystal';
        return 'circle';
      })(),
    }));
    
    setSnowflakes(flakes);
  }, []);

  const renderSnowflake = (flake: Snowflake) => {
    if (flake.type === 'detailed') {
      // Detailed six-pointed snowflake
      return (
        <svg
          width={flake.size}
          height={flake.size}
          viewBox="0 0 32 32"
          fill="white"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 1)) drop-shadow(0 0 10px rgba(180, 220, 255, 0.8))',
          }}
        >
          <g stroke="white" strokeWidth="1.5" fill="none">
            {/* Six main arms */}
            <line x1="16" y1="2" x2="16" y2="30" />
            <line x1="2" y1="16" x2="30" y2="16" />
            <line x1="6" y1="6" x2="26" y2="26" />
            <line x1="26" y1="6" x2="6" y2="26" />
            
            {/* Branch details on each arm */}
            <line x1="16" y1="6" x2="13" y2="8" />
            <line x1="16" y1="6" x2="19" y2="8" />
            <line x1="16" y1="26" x2="13" y2="24" />
            <line x1="16" y1="26" x2="19" y2="24" />
            
            <line x1="6" y1="16" x2="8" y2="13" />
            <line x1="6" y1="16" x2="8" y2="19" />
            <line x1="26" y1="16" x2="24" y2="13" />
            <line x1="26" y1="16" x2="24" y2="19" />
          </g>
          <circle cx="16" cy="16" r="3" fill="white" opacity="0.9" />
        </svg>
      );
    } else if (flake.type === 'star') {
      return (
        <svg
          width={flake.size}
          height={flake.size}
          viewBox="0 0 24 24"
          fill="white"
          style={{
            filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 1))',
          }}
        >
          <path d="M12 0 L13 11 L24 12 L13 13 L12 24 L11 13 L0 12 L11 11 Z" />
          <path d="M4 4 L11.5 11.5 L12 12 L12.5 12.5 L20 20 M20 4 L12.5 11.5 L12 12 L11.5 12.5 L4 20" />
        </svg>
      );
    } else if (flake.type === 'crystal') {
      return (
        <svg
          width={flake.size}
          height={flake.size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          style={{
            filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 1))',
          }}
        >
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
          <circle cx="12" cy="12" r="2.5" fill="white" />
        </svg>
      );
    } else {
      // Simple circle snowflake - reduce size if too big
      const circleSize = flake.size > 12 ? flake.size * 0.55 : flake.size;
      return (
        <div
          className="rounded-full bg-white"
          style={{
            width: circleSize,
            height: circleSize,
            boxShadow: '0 0 10px rgba(255, 255, 255, 1), 0 0 16px rgba(200, 230, 255, 1)',
          }}
        />
      );
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute"
          style={{
            left: `${flake.x}%`,
            top: '-30px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, flake.drift * 0.3, flake.drift * 0.7, flake.drift, flake.drift * 0.6, 0],
            rotate: [0, 120, 240, 360],
            opacity: [0, 0.9, 1, 1, 0.8, 0.5],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {renderSnowflake(flake)}
        </motion.div>
      ))}
    </div>
  );
}