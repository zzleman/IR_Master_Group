import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ReferencesList from '../components/References/ReferencesList';


const References = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <ReferencesList />
      <Footer />
    </div>
  );
}

export default References;
