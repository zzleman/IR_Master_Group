import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

const FeaturedReferences = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/references?filters[type][title][$eq]=featured&populate=*&pagination[limit]=100`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
          },
        });

        const featuredItems = res.data.data.filter(item => item.attributes.type === 'featured');
        setData(featuredItems);

        if (featuredItems.length === 0) {
          console.warn('No featured references found.');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching featured data:', error.response ? error.response.data : error.message);
        setError('Failed to load featured references');
        setLoading(false);
      }
    };

    fetchFeaturedData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="references-slider my-16">
      <h1 className="text-center font-bold text-3xl my-6">{t('header.references')}</h1>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="references-slider">
            <img 
              src={item.attributes.img.data.attributes.url} 
              className="xl:px-20 my-5 w-10/12 mx-auto h-20 md:h-28 xl:h-[150px] object-contain" 
              loading="lazy" 
              alt={`Reference ${item.id}`} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedReferences;
