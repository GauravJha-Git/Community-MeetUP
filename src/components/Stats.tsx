import { Users, Calendar, Building2, Award } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Active Students',
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    icon: Calendar,
    value: 20,
    suffix: '+',
    label: 'Events Organized',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Building2,
    value: 50,
    suffix: '+',
    label: 'Campus Partners',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    icon: Award,
    value: 100,
    suffix: '+',
    label: 'Core Members',
    gradient: 'from-teal-600 to-blue-600'
  }
];

function CountUpAnimation({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Winter background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/80" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-transparent hover:border-blue-200 shadow-xl hover:shadow-2xl transition-all"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Animated gradient border */}
                <motion.div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
                  animate={{
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </motion.div>
                
                <div className="relative space-y-3 sm:space-y-4">
                  {/* Animated icon */}
                  <motion.div 
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ 
                      rotate: { duration: 0.5 },
                      scale: { duration: 0.2 }
                    }}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </motion.div>
                  
                  <div>
                    <motion.div 
                      className={`text-3xl sm:text-4xl md:text-5xl mb-1 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <CountUpAnimation end={stat.value} suffix={stat.suffix} />
                    </motion.div>
                    <div className="text-sm sm:text-base text-slate-600">{stat.label}</div>
                  </div>
                </div>
                
                {/* Floating particles effect */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-60`}
                    style={{
                      left: `${20 + i * 30}%`,
                      bottom: '20%',
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
