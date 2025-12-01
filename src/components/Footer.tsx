import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Name */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600" />
              <span className="text-xl">Community MeetUP</span>
            </div>
            <p className="text-gray-600">
              Connecting students through tech and innovation.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <a href="#team" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                contact@communitymeetup.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                Tech Hub, Campus Center
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white hover:shadow-xl transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white hover:shadow-xl transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white hover:shadow-xl transition-all hover:scale-110"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© 2025 Community MeetUP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}