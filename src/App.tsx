import { Header } from "./components/Header";
import HeroSection from "./components/HeroSection";
import DestinationsSection from "./components/DestinationsSection";
import { ServicesSection } from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Newsletter from "./components/NewsLetter";
import Contact from "./components/Contact";
import FeaturedExperiences from "./components/FeaturedExperiences";
import ExperienceGrid from "./components/ExperienceGrid";


const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#1B1B1B] to-[#0F1A2E] text-white">
        <Header />
        <HeroSection />
        <DestinationsSection />
        <ServicesSection />
        <FeaturedExperiences />
        <ExperienceGrid />

        <Testimonials />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
