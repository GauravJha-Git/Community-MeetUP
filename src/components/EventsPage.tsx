import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import EventDetailModal from './EventDetailModal';
import Snowfall from './Snowfall';
import { motion } from 'motion/react';

const upcomingEvents = [
  {
    id: 1,
    title: 'AI Workshop Series',
    date: 'January 15, 2025',
    location: 'Online',
    address: 'Zoom Meeting Link',
    details: 'Learn the fundamentals of AI and machine learning with hands-on projects and expert guidance.',
    image: 'https://images.unsplash.com/photo-1558301204-e3226482a77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    id: 2,
    title: 'HackTheCode 2025',
    date: 'January 22, 2025',
    location: 'Tech Campus Hall',
    address: '123 University Ave, Building A',
    details: '24-hour hackathon featuring exciting challenges, mentorship, and amazing prizes for winners.',
    image: 'https://images.unsplash.com/photo-1662657138446-4c58d87881c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gradient: 'from-cyan-600 to-teal-600'
  },
  {
    id: 3,
    title: 'Design Thinking Bootcamp',
    date: 'February 5, 2025',
    location: 'Innovation Center',
    address: '456 Campus Drive, Room 201',
    details: 'Master design thinking principles and create user-centered solutions for real-world problems.',
    image: 'https://images.unsplash.com/photo-1691908622713-34a7ec0d39ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gradient: 'from-teal-600 to-blue-600'
  },
  {
    id: 4,
    title: 'Web3 Developer Meetup',
    date: 'February 12, 2025',
    location: 'Online',
    address: 'Discord Server',
    details: 'Explore blockchain technology, smart contracts, and decentralized applications with industry experts.',
    image: 'https://images.unsplash.com/photo-1544531585-f14f463149ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gradient: 'from-slate-600 to-cyan-600'
  },
  {
    id: 5,
    title: 'Mobile App Development',
    date: 'February 20, 2025',
    location: 'Tech Hub',
    address: '789 Innovation Blvd, Lab 3',
    details: 'Build native mobile applications using React Native and Flutter with practical examples.',
    image: 'https://images.unsplash.com/photo-1650094983020-89c3dfa9ce0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gradient: 'from-blue-600 to-teal-600'
  },
  {
    id: 6,
    title: 'Career Connect Summit',
    date: 'March 1, 2025',
    location: 'Conference Hall',
    address: '321 Main Street, Hall B',
    details: 'Network with tech recruiters, attend career workshops, and learn about industry opportunities.',
    image: 'https://images.unsplash.com/photo-1690192203795-ca12d9bb3227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gradient: 'from-cyan-600 to-blue-600'
  }
];

const pastEvents = [
  {
    id: 7,
    title: 'HackFest 2024',
    date: 'December 10, 2024',
    location: 'Tech Campus',
    address: '123 University Ave, Building A',
    details: 'Our biggest hackathon of the year with over 500 participants and 50+ innovative projects.',
    image: 'https://images.unsplash.com/photo-1662657138446-4c58d87881c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    id: 8,
    title: 'Cloud Computing Workshop',
    date: 'November 28, 2024',
    location: 'Online',
    address: 'Zoom Meeting',
    details: 'Comprehensive introduction to AWS, Azure, and Google Cloud platforms with certification prep.',
    image: 'https://images.unsplash.com/photo-1558301204-e3226482a77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gradient: 'from-cyan-600 to-teal-600'
  },
  {
    id: 9,
    title: 'Startup Weekend',
    date: 'November 15, 2024',
    location: 'Innovation Lab',
    address: '456 Campus Drive, Room 101',
    details: '3-day intensive program to build, pitch, and launch startup ideas with mentor support.',
    image: 'https://images.unsplash.com/photo-1690192203795-ca12d9bb3227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gradient: 'from-teal-600 to-blue-600'
  }
];

// Gallery images pool with different aspect ratios
const galleryImagePool = [
  // Portrait images
  { url: 'https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?w=600', type: 'portrait' },
  { url: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?w=600', type: 'portrait' },
  { url: 'https://images.unsplash.com/photo-1695066964145-245927509533?w=600', type: 'portrait' },
  { url: 'https://images.unsplash.com/photo-1565687981296-535f09db714e?w=600', type: 'portrait' },
  { url: 'https://images.unsplash.com/photo-1651684195895-38708dc94cfa?w=600', type: 'portrait' },
  { url: 'https://images.unsplash.com/photo-1562758778-e5638b5b6607?w=600', type: 'portrait' },
  
  // Landscape images
  { url: 'https://images.unsplash.com/photo-1733222765056-b0790217baa9?w=800', type: 'landscape' },
  { url: 'https://images.unsplash.com/photo-1706759755836-43836ff8af15?w=800', type: 'landscape' },
  { url: 'https://images.unsplash.com/photo-1523582407565-efee5cf4a353?w=800', type: 'landscape' },
  { url: 'https://images.unsplash.com/photo-1531539427495-97c44a449837?w=800', type: 'landscape' },
  { url: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=800', type: 'landscape' },
  { url: 'https://images.unsplash.com/photo-1497409988347-cbfaac2f0b12?w=800', type: 'landscape' },
  
  // Square images
  { url: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600', type: 'square' },
  { url: 'https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?w=600', type: 'square' },
  { url: 'https://images.unsplash.com/photo-1599592187465-6dc742367282?w=600', type: 'square' },
  { url: 'https://images.unsplash.com/photo-1728933102332-a4f1a281a621?w=600', type: 'square' },
  { url: 'https://images.unsplash.com/photo-1760952851538-17a59f691efe?w=600', type: 'square' },
  { url: 'https://images.unsplash.com/photo-1531539427495-97c44a449837?w=600', type: 'square' },
];

// Initial layout structure (3 columns with mixed sizes)
const initialGalleryLayout = [
  // Column 1
  { id: 1, type: 'portrait', poolIndex: 0 },
  { id: 2, type: 'landscape', poolIndex: 6 },
  { id: 3, type: 'square', poolIndex: 12 },
  
  // Column 2
  { id: 4, type: 'square', poolIndex: 13 },
  { id: 5, type: 'portrait', poolIndex: 1 },
  { id: 6, type: 'landscape', poolIndex: 7 },
  
  // Column 3
  { id: 7, type: 'landscape', poolIndex: 8 },
  { id: 8, type: 'square', poolIndex: 14 },
  { id: 9, type: 'portrait', poolIndex: 2 },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;
  const navigate = useNavigate();
  
  // State for gallery image rotation with fade effect
  const [galleryImages, setGalleryImages] = useState(initialGalleryLayout);
  const [fadingImages, setFadingImages] = useState<Set<number>>(new Set());
  
  // State for modal
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      navigate('/', { replace: true });
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random image to change
      const randomIndex = Math.floor(Math.random() * galleryImages.length);
      const currentItem = galleryImages[randomIndex];
      
      // Get all images of the same type
      const sameTypeImages = galleryImagePool
        .map((img, idx) => ({ img, idx }))
        .filter(({ img }) => img.type === currentItem.type);
      
      // Pick a random image of the same type (different from current)
      const filteredImages = sameTypeImages.filter(({ idx }) => idx !== currentItem.poolIndex);
      if (filteredImages.length === 0) return;
      
      const randomImageData = filteredImages[Math.floor(Math.random() * filteredImages.length)];
      
      // Start fade out
      setFadingImages(prev => new Set(prev).add(currentItem.id));
      
      // After fade out, change image and fade in
      setTimeout(() => {
        setGalleryImages(prev => {
          const newImages = [...prev];
          newImages[randomIndex] = {
            ...newImages[randomIndex],
            poolIndex: randomImageData.idx
          };
          return newImages;
        });
        
        // Remove from fading set
        setTimeout(() => {
          setFadingImages(prev => {
            const newSet = new Set(prev);
            newSet.delete(currentItem.id);
            return newSet;
          });
        }, 50);
      }, 400); // Duration of fade out
      
    }, 1200); // Change image every 1.2 seconds (faster)
    
    return () => clearInterval(interval);
  }, [galleryImages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
      <Snowfall />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-cyan-100/20 to-teal-100/20 animate-gradient"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">
            Events and Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore our upcoming events, relive past moments, and discover the vibrant community that makes Community MeetUP special.
          </p>
        </div>
      </section>

      {/* Tabs / Filters */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`group relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all overflow-hidden text-sm sm:text-base ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              <span className="relative z-10 whitespace-nowrap">Upcoming Events</span>
              {activeTab !== 'upcoming' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`group relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all overflow-hidden text-sm sm:text-base ${
                activeTab === 'past'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              <span className="relative z-10 whitespace-nowrap">Past Events</span>
              {activeTab !== 'past' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                {/* Event Cover */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-20`} />
                </div>

                {/* Event Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-xl sm:text-2xl">{event.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{event.details}</p>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <p className="flex items-center gap-2">
                      <span>📅</span>
                      <span className="truncate">{event.date}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📍</span>
                      <span className="truncate">{event.location}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>🏢</span>
                      <span className="truncate">{event.address}</span>
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedEvent(event)}
                    className={`group/btn relative w-full px-6 py-3 rounded-full bg-gradient-to-r ${event.gradient} text-white overflow-hidden transition-all hover:scale-105 hover:shadow-lg mt-4 cursor-pointer`}
                  >
                    <span className="relative z-10">View Details</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-full group-hover/btn:translate-x-0 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-cyan-50/50 min-h-[60vh] sm:min-h-[80vh] lg:h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2">Event Gallery</h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              Moments captured from our amazing events and gatherings
            </p>
          </div>

          {/* Pinterest-style masonry layout - responsive columns */}
          <div className="border-2 border-gray-300 rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-white/50 backdrop-blur-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {/* Column 1 */}
              <div className="flex flex-col gap-2 sm:gap-3">
                {galleryImages.filter((_, idx) => idx % 3 === 0).map((layoutItem) => {
                  const image = galleryImagePool[layoutItem.poolIndex];
                  const heightClass = 
                    image.type === 'portrait' ? 'h-36 sm:h-40 md:h-48' :
                    image.type === 'landscape' ? 'h-24 sm:h-28 md:h-32' :
                    'h-32 sm:h-36 md:h-40'; // square
                  
                  return (
                    <div
                      key={layoutItem.id}
                      className={`relative ${heightClass} rounded-lg overflow-hidden shadow-md`}
                    >
                      <ImageWithFallback
                        src={image.url}
                        alt={image.type}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${fadingImages.has(layoutItem.id) ? 'opacity-0' : 'opacity-100'}`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-2 sm:gap-3">
                {galleryImages.filter((_, idx) => idx % 3 === 1).map((layoutItem) => {
                  const image = galleryImagePool[layoutItem.poolIndex];
                  const heightClass = 
                    image.type === 'portrait' ? 'h-36 sm:h-40 md:h-48' :
                    image.type === 'landscape' ? 'h-24 sm:h-28 md:h-32' :
                    'h-32 sm:h-36 md:h-40'; // square
                  
                  return (
                    <div
                      key={layoutItem.id}
                      className={`relative ${heightClass} rounded-lg overflow-hidden shadow-md`}
                    >
                      <ImageWithFallback
                        src={image.url}
                        alt={image.type}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${fadingImages.has(layoutItem.id) ? 'opacity-0' : 'opacity-100'}`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Column 3 - Hidden on mobile, shown on sm+ */}
              <div className="hidden sm:flex flex-col gap-2 sm:gap-3">
                {galleryImages.filter((_, idx) => idx % 3 === 2).map((layoutItem) => {
                  const image = galleryImagePool[layoutItem.poolIndex];
                  const heightClass = 
                    image.type === 'portrait' ? 'h-36 sm:h-40 md:h-48' :
                    image.type === 'landscape' ? 'h-24 sm:h-28 md:h-32' :
                    'h-32 sm:h-36 md:h-40'; // square
                  
                  return (
                    <div
                      key={layoutItem.id}
                      className={`relative ${heightClass} rounded-lg overflow-hidden shadow-md`}
                    >
                      <ImageWithFallback
                        src={image.url}
                        alt={image.type}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${fadingImages.has(layoutItem.id) ? 'opacity-0' : 'opacity-100'}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
}