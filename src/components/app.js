import React, { useState, useEffect } from 'react';
import Home from "./Home/Home"
// import Hero from './Hero/Hero';
// import About from './About/About';
// import Projects from './Projects/Projects';
// import Contact from './Contact/Contact';
// import Footer from './Footer/Footer';

import { StoreProvider } from '../context';

// import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';
import { homeData } from '../mock/data';


function App() {
   const [home, setHome] = useState({});
//   const [hero, setHero] = useState({});
//   const [about, setAbout] = useState({});
//   const [projects, setProjects] = useState([]);
//   const [contact, setContact] = useState({});
//   const [footer, setFooter] = useState({});

  useEffect(() => {
   setHome({ ...homeData });
   //  setHero({ ...heroData });
   //  setAbout({ ...aboutData });
   //  setProjects([...projectsData]);
   //  setContact({ ...contactData });
   //  setFooter({ ...footerData });
  }, []);

  return (
   //  <StoreProvider value={{ hero, about, projects, contact, footer }}>
   <StoreProvider value={{ home }}>
      <Home />
      {/* <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer /> */}
    </StoreProvider>
  );
}

export default App;
