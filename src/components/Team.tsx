import { useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembersCol1 = [
  { 
    name: 'Alex Chen', 
    image: 'https://images.unsplash.com/photo-1742119897876-67e9935ac375?w=400'
  },
  { 
    name: 'Michael Lee', 
    image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?w=400'
  },
  { 
    name: 'Ryan Davis', 
    image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=400'
  },
  { 
    name: 'James Wilson', 
    image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?w=400'
  },
  { 
    name: 'David Kim', 
    image: 'https://images.unsplash.com/photo-1742119897876-67e9935ac375?w=400'
  },
  { 
    name: 'Noah Garcia', 
    image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?w=400'
  },
  { 
    name: 'Ethan Rodriguez', 
    image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=400'
  },
  { 
    name: 'Liam Taylor', 
    image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?w=400'
  }
];

const teamMembersCol2 = [
  { 
    name: 'Sarah Kumar', 
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?w=400'
  },
  { 
    name: 'Priya Sharma', 
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=400'
  },
  { 
    name: 'Maya Patel', 
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?w=400'
  },
  { 
    name: 'Lisa Wang', 
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=400'
  },
  { 
    name: 'Emma Brown', 
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?w=400'
  },
  { 
    name: 'Olivia Martin', 
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=400'
  },
  { 
    name: 'Sophia Anderson', 
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?w=400'
  }
];

// Duplicate for seamless loop
const duplicatedCol1 = [...teamMembersCol1, ...teamMembersCol1];
const duplicatedCol2 = [...teamMembersCol2, ...teamMembersCol2];

export default function Team() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll1 = scrollRef1.current;
    const scroll2 = scrollRef2.current;
    
    if (!scroll1 || !scroll2) return;

    let animationId1: number;
    let animationId2: number;
    let position1 = 0;
    let position2 = 0;

    // First row - Right to Left (slower speed)
    const animate1 = () => {
      position1 += 0.3;
      if (position1 >= scroll1.scrollWidth / 2) {
        position1 = 0;
      }
      scroll1.style.transform = `translateX(-${position1}px)`;
      animationId1 = requestAnimationFrame(animate1);
    };

    // Second row - Left to Right (faster speed, opposite direction)
    const animate2 = () => {
      position2 += 0.6;
      const offset = scroll2.scrollWidth / 2;
      if (position2 >= offset) {
        position2 = 0;
      }
      scroll2.style.transform = `translateX(${position2 - offset}px)`;
      animationId2 = requestAnimationFrame(animate2);
    };

    animationId1 = requestAnimationFrame(animate1);
    animationId2 = requestAnimationFrame(animate2);

    return () => {
      cancelAnimationFrame(animationId1);
      cancelAnimationFrame(animationId2);
    };
  }, []);

  return (
    <section className="relative py-24 px-6 lg:px-12 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-cyan-50/50 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-cyan-100/20 to-teal-100/20 animate-gradient"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">
            The amazing people behind Community MeetUP
          </p>
        </div>

        <div className="space-y-8">
          {/* First Row - Left to Right */}
          <div className="overflow-hidden">
            <div ref={scrollRef1} className="flex gap-6 will-change-transform">
              {duplicatedCol1.map((member, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.9) 100%)'
                  }}
                >
                  {/* Image */}
                  <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-cyan-100">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl">{member.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="overflow-hidden">
            <div ref={scrollRef2} className="flex gap-6 will-change-transform">
              {duplicatedCol2.map((member, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.9) 100%)'
                  }}
                >
                  {/* Image */}
                  <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-cyan-100">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl">{member.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}