import React from 'react';
import { motion } from 'framer-motion';
import ThreeScene from '../ThreeScene/ThreeScene';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex gap-12 items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <ThreeScene />
      </motion.div>
      <div className='flex flex-col gap-4'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='pr-16'
        >
          <h1 className="text-4xl font-bold mb-3">Biz kimik?</h1>
          <p>
            "İR Master Group" Məhdud Məsuliyyətli Cəmiyyəti 2017-cu ildə təsis edilmişdir. "İR Master Group" MMC təmir, tikinti , elektrik , isitmə , soyutma , havalandırma və su təchizatı sistemlərinin quraşdırılması və satış sonrası servisini həyata keçirir. Şirkətimizin əsas meyyarları müştəri məmnuniyyətinin üzərində qurulmuşdur. "İR Master Group" MMC xidmətlərin yerinə yetirilməsində və servis xidmətlərinin göstərilməsi yönündə yetərincə təcrübəyə malikdir. Bunlarla yanaşı işlərin layihələndirilməsini də şirkətin əsəs fəaliyyət istiqamətlərindəndir.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.5 }}
          className='pr-16'
        >
          <h1 className="text-4xl font-bold mb-3">Missiyamız</h1>
          <p>
            "İR Master Group" MMC olaraq istənilən miqyaslı və mürəkkəb layihələrin ən yüksək səviyyədə həllini həyata keçirilməsinə zəmanət veririk. Peşəkarlıq, təcrübə və güclü mühəndis heyyəti ilə şirkətimiz riskləri minimuma endirə və işlərin keyfiyyətlə həyata keçirilməsini təmin edə bilir. "İR Master Group MMC" 2017- ci ildə təsis edilmişdir.
            Şirkətimizin əsas hədəfi peşəkar iş, dayanıqlılıq, müştəri məmnuniyyəti və inşaat sektorunda özünəməxsus dəsti-xətt ilə müştərilərə keyfiyyətli xidmət göstərməkdir. Professional mühəndis və işçi heyəti ilə fəaliyyət göstərən "İR Master Group MMC" eyni zamanda etibarlı bir tərəfdaşdır. Layihələrin keyfiyyətli materiallarla, standartlara uyğun və vaxtında təhvilverilməsi əsas prioritetimizdir.
          </p>
          <a href="">
            <button className="bg-blue-950 bg-opacity-90 text-white p-2 w-40 h-11 rounded-xl mt-3">Daha çox</button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
