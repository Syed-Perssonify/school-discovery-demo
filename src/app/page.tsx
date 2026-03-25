import Hero from "./(home)/Hero";
import Navbar from "./(home)/Navbar";
import About from "./(home)/About";
import VisionPurpose from "./(home)/VisionPurpose";
import ObjectiveApproach from "./(home)/Objectiveapproach";
import Process from "./(home)/Process";
import Cornerstones from "./(home)/Cornerstones";
import GuidingPrinciple from "./(home)/Guidingprinciple";
import Founder from "./(home)/Founder";
import Footer from "./(home)/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <VisionPurpose />
      <ObjectiveApproach />
      <Process />
      <Cornerstones />
      <GuidingPrinciple />
      <Founder />
      <Footer />
    </div>
  );
}
