import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  type: 'circle' | 'star' | 'crystal';
}

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate 80 snowflakes with random properties (increased from 50)
    const flakes: Snowflake[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position (%)
      size: Math.random() * 6 + 6, // Size between 6-12px (bigger and visible)
      duration: Math.random() * 8 + 12, // Fall duration between 12-20s
      delay: Math.random() * 5, // Stagger start time
      drift: (Math.random() - 0.5) * 150, // Horizontal drift during fall
      type: Math.random() > 0.6 ? 'star' : Math.random() > 0.5 ? 'crystal' : 'circle',
    }));
    
    setSnowflakes(flakes);
  }, []);

  const renderSnowflake = (flake: Snowflake) => {
    if (flake.type === 'star') {
      // Six-pointed star snowflake
      return (
        <svg
          width={flake.size}
          height={flake.size}
          viewBox="0 0 24 24"
          fill="white"
          style={{
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.9))',
          }}
        >
          <path d="M12 0 L13 11 L24 12 L13 13 L12 24 L11 13 L0 12 L11 11 Z" />
          <path d="M4 4 L11.5 11.5 L12 12 L12.5 12.5 L20 20 M20 4 L12.5 11.5 L12 12 L11.5 12.5 L4 20" />
        </svg>
      );
    } else if (flake.type === 'crystal') {
      // Crystal/asterisk snowflake
      return (
        <svg
          width={flake.size}
          height={flake.size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          style={{
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.9))',
          }}
        >
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
          <circle cx="12" cy="12" r="2" fill="white" />
        </svg>
      );
    } else {
      // Simple circle snowflake - reduce size if too big
      const circleSize = flake.size > 10 ? flake.size * 0.6 : flake.size;
      return (
        <div
          className="rounded-full bg-white"
          style={{
            width: circleSize,
            height: circleSize,
            boxShadow: '0 0 8px rgba(255, 255, 255, 1), 0 0 12px rgba(200, 230, 255, 0.8)',
          }}
        />
      );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute"
          style={{
            left: `${flake.x}%`,
            top: '-20px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, flake.drift * 0.5, flake.drift, flake.drift * 0.5, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 1, 1, 0.7],
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