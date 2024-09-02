import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { useTranslation } from 'react-i18next';

Modal.setAppElement('#root'); 

const media = [
  { type: 'image', src: '/gallery/abb-1.jpeg' },
  { type: 'image', src: '/gallery/abb-4.jpeg' },
  { type: 'image', src: '/gallery/abb-5.jpeg' },
  { type: 'image', src: '/gallery/abb-6.jpeg' },
  { type: 'image', src: '/gallery/abb-7.jpeg' },
  { type: 'image', src: '/gallery/abb-8.jpeg' },
  { type: 'image', src: '/gallery/abb-9.jpeg' },
  { type: 'video', src: '/gallery/adidas.mp4', cover: '/gallery/adidas-cover.png' },
  { type: 'video', src: '/gallery/atelier.mp4', cover: '/gallery/atelier.jpg' },
  { type: 'video', src: '/gallery/suwen.mp4', cover: '/gallery/suwen.png' },
  { type: 'video', src: '/gallery/bagel.mp4', cover: '/gallery/bagel.jpeg' },
];

const Projects = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const openModal = (mediaItem) => {
    setSelectedMedia(mediaItem);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMedia(null);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(4); 
      } else if (width < 1024) {
        setItemsPerPage(6); 
      } else {
        setItemsPerPage(8); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = media.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(media.length / itemsPerPage);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='container mx-auto my-24'>
        <h1 className='text-3xl text-blue-950 opacity-90 text-center font-bold my-10'> {t('header.projects')}</h1>
        <div className='grid mx-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {currentItems.map((item, index) => (
            <div key={index} className='cursor-pointer'>
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`Project ${index + 1}`}
                  className='w-full h-64 object-cover transition-transform transform hover:scale-105'
                  onClick={() => openModal(item)}
                />
              ) : (
                <div className='relative'>
                  <img
                    src={item.cover}
                    alt={`Cover for video ${index + 1}`}
                    className='w-full h-64 object-cover transition-transform transform hover:scale-105'
                    onClick={() => openModal(item)}
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer' onClick={() => openModal(item)}>
                    <span className='text-white text-4xl'>▶</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='flex justify-center items-center mt-4'>
          <button 
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
            disabled={currentPage === 1}
            className='px-4 py-2 bg-blue-950 opacity-90 text-white rounded mr-2'
          >
             {t('pagination.prev')}
          </button>
          <span className='mx-2'>{currentPage} / {totalPages}</span>
          <button 
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} 
            disabled={currentPage === totalPages}
            className='px-4 py-2 bg-blue-950 opacity-90 text-white rounded ml-2'
          >
             {t('pagination.next')}
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'none',
            border: 'none',
            padding: '0',
            maxWidth: '90%',
            maxHeight: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          },
        }}
      >
        {selectedMedia && (
          <>
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt='Selected Project'
                className='object-cover h-80 lg:h-[400px]  xl:h-96 w-full'
              />
            ) : (
              <video
                className='mt-10 h-96 object-cover'
                controls
              >
                <source src={selectedMedia.src} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            )}

            <button
              onClick={closeModal}
              className='absolute top-0 right-0 bg-blue-950 opacity-90 text-white w-10 p-2 shadow-lg'
              aria-label="Close"
            >
              X
            </button>
          </>
        )}
      </Modal>
      <Footer />
    </div>
  );
};

export default Projects;
