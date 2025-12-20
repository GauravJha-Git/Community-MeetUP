import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated wave at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
            opacity="0.5"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="white"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
            {/* Logo and Name */}
            <motion.div
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
                <motion.div
                  className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-400 ring-2 ring-white/30"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1696041757950-62e2c030283b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tbXVuaXR5JTIwbG9nbyUyMG1pbmltYWx8ZW58MXx8fHwxNzY2MDkwMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Community MeetUps Logo"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <span className="text-xl">Community MeetUps</span>
              </div>
              <p className="text-sm sm:text-base text-blue-200">
                Connecting students through tech and innovation.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="mb-4 text-base sm:text-lg text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm sm:text-base text-blue-200 hover:text-cyan-300 transition-colors inline-block hover:translate-x-1">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-sm sm:text-base text-blue-200 hover:text-cyan-300 transition-colors inline-block hover:translate-x-1">
                    Events
                  </Link>
                </li>
                <li>
                  <a href="#team" className="text-sm sm:text-base text-blue-200 hover:text-cyan-300 transition-colors inline-block hover:translate-x-1">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm sm:text-base text-blue-200 hover:text-cyan-300 transition-colors inline-block hover:translate-x-1">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-4 text-base sm:text-lg text-white">Contact Info</h3>
              <ul className="space-y-3 text-blue-200 text-sm">
                <li className="flex items-center gap-2 justify-center sm:justify-start group">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all sm:break-normal">contact@communitymeetup.com</span>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start group">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start group">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Tech Hub, Campus Center</span>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="mb-4 text-base sm:text-lg text-white">Follow Us</h3>
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                <motion.a
                  href="#"
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.15, rotate: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Copyright */}
          <motion.div
            className="pt-8 border-t border-white/20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xs sm:text-sm md:text-base text-blue-200">
              © 2025 Community MeetUps. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}