import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import debounce from 'lodash.debounce'; // Import debounce

const ReferencesList = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem('selectedCategoryId') || 'All'
  );
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage(window.innerWidth));

  function getItemsPerPage(width) {
    if (width < 600) return 4;
    if (width < 1024) return 6;
    return 9;
  }

  useEffect(() => {
    const handleResize = debounce(() => {
      setItemsPerPage(getItemsPerPage(window.innerWidth));
    }, 300); // Debounce the resize event
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/categories`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
          },
        });
        setCategories(categoriesResponse.data.data);

        const referencesResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/references?populate=*&pagination[start]=0&pagination[limit]=100&_sort=id:asc`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
          },
        });
        setData(referencesResponse.data.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchData();
  }, [currentLang]);

  const filteredData = useMemo(() => {
    if (selectedCategory === 'All') {
      return data;
    }
    return data.filter(item => item.attributes.category.data.id === parseInt(selectedCategory, 10));
  }, [data, selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    localStorage.setItem('selectedCategoryId', categoryId);
    setCurrentPage(1);
  };

  const allCategoryTitle = {
    en: 'All',
    az: 'Hamısı',
    ru: 'Все',
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <span className="text-xl font-bold">{t('loading...')}</span>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="references-slider h-[max-content] my-36">
      <h1 className='text-center font-bold text-3xl text-blue-950 opacity-90'>{t('header.references')}</h1>
      
      <div className="flex flex-wrap w-full xl:w-max mx-auto gap-3 xl:gap-0 justify-center space-x-4 my-8">
        <button
          className={`px-4 py-2 rounded-full ${selectedCategory === 'All' ? 'bg-blue-950 text-white' : 'bg-gray-300'}`}
          onClick={() => handleCategoryClick('All')}
        >
          {allCategoryTitle[currentLang]}
        </button>
        {categories.map((cat) => {
          const categoryTitle = cat.attributes[`title_${currentLang}`] || cat.attributes.title_az;
          return (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full ${selectedCategory === String(cat.id) ? 'bg-blue-950 text-white' : 'bg-gray-300'}`}
              onClick={() => handleCategoryClick(String(cat.id))}
            >
              {categoryTitle}
            </button>
          );
        })}
      </div>

      <div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 lg:w-6/12 mx-auto mt-10">
          {currentItems.map((item) => {
            const imgUrl = item.attributes.img?.data?.attributes?.url;

            return (
              <div key={item.id} className="border p-4">
                {imgUrl ? (
                  <img 
                    src={imgUrl} 
                    alt={`Reference ${item.id}`} 
                    className="w-full h-[150px] object-contain" 
                  />
                ) : (
                  <p>No image available</p>
                )}
                <h3 className="text-lg">
                  {item.attributes[`title_${currentLang}`] || item.attributes.title_az}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center mt-10 lg:my-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-950 opacity-90 text-white rounded"
          >
            {t('pagination.prev')}
          </button>
          <span className="mx-2">{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-950 opacity-90 text-white rounded"
          >
            {t('pagination.next')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferencesList;
