import { useState } from 'react';
import { Linkedin, Instagram, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden bg-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-cyan-50/50 to-teal-50/50 animate-gradient"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Image and Socials */}
          <div className="flex flex-col gap-6">
            {/* Portrait Image - Takes most of the height */}
            <div className="flex-1 rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762344668789-0a49621cb4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Contact Us"
                className="w-full h-full object-cover min-h-[500px]"
              />
            </div>

            {/* Social Media - Below image */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8">
              <h3 className="text-xl mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="group w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white hover:shadow-2xl transition-all hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group w-14 h-14 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white hover:shadow-2xl transition-all hover:scale-110"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group w-14 h-14 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white hover:shadow-2xl transition-all hover:scale-110"
                >
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Message */}
              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="flex-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none min-h-[200px]"
                  placeholder="Tell us what's on your mind..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}