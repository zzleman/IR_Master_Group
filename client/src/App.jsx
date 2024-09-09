import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import ScrollToTop from './ScrollToTop'; 

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/references" element={<References />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/licenses" element={<Licenses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
