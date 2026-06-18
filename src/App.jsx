import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
// import Process from "./components/Process/Process";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
// import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import MouseGlow from "./components/MouseGlow/MouseGlow";
import Reveal from "./components/Reveal/Reveal";
import FluidBackground from "./components/FluidBackground/FluidBackground";

function App() {
  return (
    <>
      {/* <MouseGlow /> */}
      {/* <AnimatedBackground /> */}
      <FluidBackground />

      <Navbar />
      <Reveal ><Hero /></Reveal>
      <Reveal ><Services /></Reveal>
      <Reveal ><WhyChooseUs /></Reveal>
      <Reveal ><Portfolio /></Reveal>
      <Reveal ><Testimonials /></Reveal>
      <Reveal ><Contact /></Reveal>
      <Reveal ><Footer /></Reveal>
    </>
  );
}

export default App;