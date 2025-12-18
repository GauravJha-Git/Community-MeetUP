import Hero from './Hero';
import Stats from './Stats';
import About from './About';
import RecentEvents from './RecentEvents';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Snowfall from './Snowfall';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
      {/* Snowfall for everything except hero */}
      <div className="hidden-on-hero">
        <Snowfall />
      </div>
      
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Stats />
      <div id="about">
        <About />
      </div>
      <RecentEvents />
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}