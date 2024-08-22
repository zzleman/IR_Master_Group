import React from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
