import "./App.css";

import {
  Awards,
  Contact,
  About,
  Footer,
  Gallery,
  Hero,
  Navbar,
  Newsletter,
  Quote,
  Special,
  Video,
} from "./components";

const App = () => {
  return (
    <div className="relative z-0">
      <div className="relative min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Special />
      <Quote />
      <Video />
      <Awards />
      <Gallery />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
