import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
// import Testimonials from "./components/testimonials/Testimonials";
// import Footer from "./components/footer/Footer";

// import Services from "./components/services/Services";
// import { BiJoystick } from "react-icons/bi";
const App = () => {
  return (
    //<></> ตรงนี้เรียกว่า react fragment เราจะใส่ คอมโพแน้นทั้งหมดไว้ในนี้
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />

      {/* <Services />
      <Testimonials />
      <Footer /> */}
    </>
  );
};

export default App;
