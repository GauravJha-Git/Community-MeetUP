import Hero from './Hero';
import Stats from './Stats';
import About from './About';
import RecentEvents from './RecentEvents';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
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