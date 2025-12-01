import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-6 lg:px-12 min-h-screen flex items-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 animate-gradient"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200/20 via-transparent to-cyan-200/20 animate-wave"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-7xl lg:text-8xl tracking-tight">
            Community<br />MeetUP
          </h1>
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl">
              We Connect.<br />
              We Build.<br />
              We Grow.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 pt-4 justify-center">
            <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Join Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <Link to="/events">
              <button className="group px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-lg relative overflow-hidden">
                <span className="relative z-10">View Events</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}