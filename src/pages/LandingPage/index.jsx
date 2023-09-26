import About from "./About";
import Advantages from "./Advantages";
import Footer from "./Footer";
import Games from "./Games";
import Header from "./Header";
import Hero from "./Hero";
import Roadmap from "./Roadmap";

const LandingPage = () => {
  return (
    <div className="bg-[#090909] overflow-hidden w-full min-h-screen">
      <Header />
      <Hero />
      <Games />
      <About />
      <Advantages />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default LandingPage;
