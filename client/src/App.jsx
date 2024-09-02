import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Licenses from './pages/Licenses';
import Partners from './pages/Partners';
import References from './pages/References';
import Services from './pages/Services';
import './i18n';
import Error from './components/Error/Error';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/az/" />} />
        <Route path="/:lang/" element={<Home />} />
        <Route path="/:lang/about" element={<AboutUs />} />
        <Route path="/:lang/projects" element={<Projects />} />
        <Route path="/:lang/services" element={<Services />} />
        <Route path="/:lang/references" element={<References />} />
        <Route path="/:lang/partners" element={<Partners />} />
        <Route path="/:lang/licenses" element={<Licenses />} />
        <Route path="/:lang/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
