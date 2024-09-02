import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();

  const [partners, setPartners] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage(window.innerWidth));

  function getItemsPerPage(width) {
    if (width < 600) return 4; 
    return 6; 
  }

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/partners?populate=*&pagination[start]=0&pagination[limit]=100`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
          },
        });
        setPartners(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching partners:', error.response ? error.response.data : error.message);
        setError('Failed to load partners');
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const totalPages = Math.ceil(partners.length / itemsPerPage);
  const currentItems = partners.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='flex flex-col'>
      <Header />
      <div className="partners-grid mt-36 mb-16 lg:my-36">
        <h1 className="text-center font-bold text-3xl text-blue-950 opacity-90">{t('header.partners')}</h1>    
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 lg:w-6/12 mx-auto mt-10">
          {currentItems.map((partner) => (
            <div key={partner.id} className="border p-4">
              <img 
                src={`${import.meta.env.VITE_APP_UPLOAD_URL}${partner.attributes.img.data.attributes.url}`} 
                alt={`Partner ${partner.id}`} 
                className="w-full h-[150px] object-contain" 
              />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-10 lg:my-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-950 opacity-90 text-white rounded"
          >
            {t('pagination.prev', { defaultValue: 'Əvvəlki' })}
          </button>
          <span className="mx-2">{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-950 opacity-90 text-white rounded"
          >
            {t('pagination.next', { defaultValue: 'Sonrakı' })}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partners;
