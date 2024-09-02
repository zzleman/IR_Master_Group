import React from 'react';

const Service = (props) => {
  const { img_path, order, title, items } = props;
  const itemList = Array.isArray(items) ? items : [];

  return (
    <div className="service-item bg-gray-100 p-5 h-[430px] flex flex-col gap-7 hover:bg-blue-950 hover:bg-opacity-90 hover:text-white cursor-pointer transition duration-500">
      <div className="top flex items-center justify-between">
        <img className='h-20 w-20 object-cover' src={img_path} alt="Service Icon" />
        <span className='text-xl'>{order}</span>
      </div>
      <div className="bottom">
        <h3 className='font-bold text-lg mb-3'>{title}</h3>
        <ul className='leading-7 text-xs'>
          {itemList.length > 0 ? (
            itemList.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <li>No information available</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Service;
