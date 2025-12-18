import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isEventsPage = location.pathname === '/events';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false); // Close mobile menu when navigating
    if (isEventsPage) {
      // If on events page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className={`bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600 group-hover:scale-110 transition-transform">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1696041757950-62e2c030283b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tbXVuaXR5JTIwbG9nbyUyMG1pbmltYWx8ZW58MXx8fHwxNzY2MDkwMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community MeetUP Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base sm:text-lg lg:text-xl">Community MeetUP</span>
          </Link>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="relative text-gray-700 hover:text-blue-600 transition-colors cursor-pointer group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="relative text-gray-700 hover:text-blue-600 transition-colors cursor-pointer group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <Link
              to="/events"
              className="relative text-gray-700 hover:text-blue-600 transition-colors cursor-pointer group"
            >
              <span className="relative z-10">Events</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button
              onClick={() => scrollToSection('team')}
              className="relative text-gray-700 hover:text-blue-600 transition-colors cursor-pointer group"
            >
              <span className="relative z-10">Team</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 lg:px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1.5 sm:p-2 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                About
              </button>
              <Link
                to="/events"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Events
              </Link>
              <button
                onClick={() => scrollToSection('team')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mx-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center hover:shadow-lg transition-all"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}