import React from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import ServicesList from '../components/Services/ServicesList';
import FeaturedReferences from '../components/References/FeaturedReferences';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Carousel />
      <About />
      <ServicesList/>
      <FeaturedReferences />
      <Footer />
    </div>
  );
}

export default Home;
