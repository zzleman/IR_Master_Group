
import React from 'react';

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3037.9958825318345!2d49.860122!3d40.408942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d1cb44d7071%3A0x3ecc5f980c4fa028!2zNDQgQcWfxLFxIE1vbGxhIEPDvG3JmSwgQmFrxLEsIEF6ZXJiYWlqYW4!5e0!3m2!1sen!2shu!4v1724693969052!5m2!1sen!2shu"
      width="100%"
      height="520"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  );
};

export default Map;
