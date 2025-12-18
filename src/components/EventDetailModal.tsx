import { MapPin, Calendar, ExternalLink, X, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  address: string;
  details: string;
  image: string;
  gradient: string;
}

interface EventDetailModalProps {
  event: Event;
  onClose: () => void;
}

export default function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  const isPastEvent = new Date(event.date) < new Date();

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const topics = [
    'Hands-on Learning',
    'Expert Guidance',
    'Networking',
    'Practical Projects'
  ];

  const timeMapping: { [key: number]: string } = {
    1: '10:00 AM - 4:00 PM',
    2: '9:00 AM - 9:00 AM (24 hours)',
    3: '2:00 PM - 6:00 PM',
    4: '6:00 PM - 9:00 PM',
    5: '11:00 AM - 5:00 PM',
    6: '9:00 AM - 5:00 PM',
    7: '9:00 AM - 9:00 AM (24 hours)',
    8: '1:00 PM - 5:00 PM',
    9: 'Fri 6:00 PM - Sun 9:00 PM'
  };

  const capacityMapping: { [key: number]: string } = {
    1: '100 participants',
    2: '200 participants',
    3: '50 participants',
    4: '150 participants',
    5: '80 participants',
    6: '300 participants',
    7: '500 participants',
    8: '120 participants',
    9: '75 participants'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg cursor-pointer group"
        >
          <X className="w-6 h-6 text-gray-700 group-hover:rotate-90 transition-transform" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
          {/* Hero Image with Button */}
          <div className="relative w-full h-80 overflow-hidden">
            <ImageWithFallback
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Register Button on Image */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <button
                className={`px-8 py-4 bg-gradient-to-r ${event.gradient} text-white rounded-full hover:shadow-2xl transition-all hover:scale-105 cursor-pointer`}
              >
                {isPastEvent ? 'View Event Recap' : 'Register Now'}
              </button>
            </div>
          </div>

          {/* Event Details Content */}
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-4xl mb-4">{event.title}</h2>
                
                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                    <Calendar className="w-5 h-5 text-indigo-600 mb-2" />
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="text-gray-900">{event.date}</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                    <Clock className="w-5 h-5 text-blue-600 mb-2" />
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="text-gray-900">{timeMapping[event.id] || '10:00 AM - 5:00 PM'}</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                    <MapPin className="w-5 h-5 text-purple-600 mb-2" />
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-900">{event.location}</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl border border-cyan-100">
                    <Users className="w-5 h-5 text-cyan-600 mb-2" />
                    <p className="text-sm text-gray-600">Capacity</p>
                    <p className="text-gray-900">{capacityMapping[event.id] || '100 participants'}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-2xl mb-3">About This Event</h3>
                  <p className="text-gray-700 leading-relaxed">{event.details}</p>
                </div>

                {/* Topics */}
                <div>
                  <h3 className="text-2xl mb-3">What You'll Learn</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {topics.map((topic, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${event.gradient}`} />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-6 sticky top-6">
                  {/* Registration Card */}
                  <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-gray-200">
                    <h3 className="text-xl mb-4">Event Details</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">Address</p>
                          <p className="text-gray-900">{event.address}</p>
                        </div>
                      </div>
                    </div>

                    {!isPastEvent && (
                      <>
                        <button
                          className={`w-full px-6 py-3 bg-gradient-to-r ${event.gradient} text-white rounded-full hover:shadow-lg transition-all hover:scale-105 cursor-pointer mb-3`}
                        >
                          Register for Event
                        </button>
                        
                        <button
                          className="w-full px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-all cursor-pointer"
                        >
                          Add to Calendar
                        </button>
                      </>
                    )}
                  </div>

                  {/* Share Links */}
                  <div className="p-6 bg-white rounded-2xl border border-gray-200">
                    <h3 className="text-xl mb-4">Share Event</h3>
                    <div className="space-y-3">
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Share on Twitter
                      </button>
                      <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Share on LinkedIn
                      </button>
                      <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Copy Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}