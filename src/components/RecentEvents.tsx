import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    gradient: 'from-blue-600 to-cyan-600'
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
    gradient: 'from-cyan-600 to-teal-600'
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
    gradient: 'from-teal-600 to-blue-600'
  }
];

export default function RecentEvents() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl mb-4">Recent Events</h2>
          <p className="text-xl text-gray-600">
            Check out what we've been up to lately
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {recentEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {/* Event Image with Gradient Overlay */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-20`} />
                
                {/* Tag */}
                <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${event.gradient} text-white text-sm`}>
                  {event.tag}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl">{event.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{event.details}</p>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p className="flex items-center gap-2">
                    <span>📅</span>
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    {event.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>🏢</span>
                    {event.address}
                  </p>
                </div>
                <button className={`group/btn relative w-full px-6 py-3 rounded-full bg-gradient-to-r ${event.gradient} text-white text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-lg mt-4`}>
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
            <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <span className="relative z-10">View All Events</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}