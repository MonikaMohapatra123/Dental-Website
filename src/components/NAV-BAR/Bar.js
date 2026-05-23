import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
// import DesktopNavBar from './DesktopNavBar';  // Import your NavBar component


import Services from './Services';  // Example page for Services
import Projects from './Projects';// Example components for your pages
import NavBar from './NavBar';
import Contact from './contact';
import News from './news';

function  Bar() {
  return (
    <Router> 
      {/* <DesktopNavBar /> This will render the NavBar on all pages */}
      <NavBar/>
      <Routes>  {/* Routes component replaces Switch in v6 */}
        <Route path="/projects" element={<Projects />} />  {/* Use element prop with components */}
        <Route path="/services" element={<Services />} />  
        {/* <Route path="/" element={<div>Welcome to the homepage!</div>} /> Default route */}
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/news" element={<News/>}/>
      </Routes>
    </Router>
  );
}

export default Bar;
