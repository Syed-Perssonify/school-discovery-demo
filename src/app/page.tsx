import Hero from "./(home)/Hero";
import Navbar from "./(home)/Navbar";
import About from "./(home)/About";
import VisionPurpose from "./(home)/VisionPurpose";
import Process from "./(home)/Process";
import Cornerstones from "./(home)/Cornerstones";
import GuidingPrinciple from "./(home)/Guidingprinciple";
import Support from "./(home)/Support";
import Founder from "./(home)/Founder";
import Footer from "./(home)/Footer";

export default function Home() {
  return (
    <div>
      <div id="contact" className="sr-only" />
      <Navbar />
      <Hero />
      <About />
      <VisionPurpose />
      <Cornerstones />
      <Process />
      <GuidingPrinciple />
      <Support />
      <Founder />
      <Footer />
    </div>
  );
}
