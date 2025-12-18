import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import EventDetailModal from './EventDetailModal';

const recentEvents = [
  {
    id: 1,
    title: 'HackFest 2025',
    image: 'https://images.unsplash.com/photo-1662657138446-4c58d87881c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    tag: 'Hackathon',
    date: 'January 22, 2025',
    location: 'Tech Campus Hall',
    address: '123 University Ave, Building A',
    details: '24-hour hackathon featuring exciting challenges, mentorship, and amazing prizes.',
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    id: 2,
    title: 'Tech Workshop Series',
    image: 'https://images.unsplash.com/photo-1558301204-e3226482a77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    tag: 'Workshop',
    date: 'January 15, 2025',
    location: 'Online',
    address: 'Zoom Meeting Link',
    details: 'Learn the fundamentals of AI and machine learning with hands-on projects.',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    id: 3,
    title: 'Developer Meetup',
    image: 'https://images.unsplash.com/photo-1544531585-f14f463149ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    tag: 'Networking',
    date: 'February 5, 2025',
    location: 'Innovation Center',
    address: '456 Campus Drive, Room 201',
    details: 'Network with fellow developers, share ideas, and build connections.',
    gradient: 'from-purple-600 to-pink-600'
  }
];

export default function RecentEvents() {
  const [selectedEvent, setSelectedEvent] = useState<typeof recentEvents[0] | null>(null);

  return (
    <>
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 mb-4">
              <p className="text-sm text-indigo-700">What's Happening</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Recent Events
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Check out what we've been up to lately
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {recentEvents.map((event, index) => (
              <div
                key={event.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                {/* Event Image with Gradient Overlay */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-20`} />
                  
                  {/* Tag */}
                  <div className={`absolute top-4 left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${event.gradient} text-white text-xs sm:text-sm shadow-lg`}>
                    {event.tag}
                  </div>
                </div>

                {/* Event Content */}
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
                    className={`group/btn relative w-full px-6 py-3 rounded-full bg-gradient-to-r ${event.gradient} text-white text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-lg mt-4 cursor-pointer`}
                  >
                    <span className="relative z-10">View Details</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-full group-hover/btn:translate-x-0 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Events Button */}
          <div className="text-center">
            <Link to="/events">
              <button className="group inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-105 hover:shadow-xl text-base sm:text-lg relative overflow-hidden">
                <span className="relative z-10">View All Events</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </>
  );
}