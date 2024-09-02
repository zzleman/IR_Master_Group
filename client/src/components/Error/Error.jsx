import React, { useEffect } from 'react';
import notFoundImage from '../../../public/img/error.png';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Error = () => {
  return (
    <div className='flex flex-col'>
      <Header />
    <div className="flex flex-col items-center gap-5 justify-center min-h-screen text-center mt-10 xl:my-24">
      <img src={notFoundImage} alt="Not Found" className="w-[600px] my-4" />
      <p className="text-3xl font-extrabold"> <span className='text-[#F6890A]'>OooPs!</span> Page Not Found</p>
      <p className="text-xs w-80">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
        Please check and try again.</p>
      <a 
        href="/" 
        className="inline-block px-6 py-2 bg-[#F6890A] text-white text-xs rounded hover:bg-blue-600 transition"
      >
        BACK TO HOME
      </a>
        </div>
      <Footer />
    </div>

  );
};

export default Error;
