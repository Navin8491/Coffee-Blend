import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: '/images/bg_1.jpg',
    subheading: 'Welcome',
    heading: 'The Best Coffee Testing Experience',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    image: '/images/bg_2.jpg',
    subheading: 'Welcome',
    heading: 'Amazing Taste & Beautiful Place',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    image: '/images/bg_3.jpg',
    subheading: 'Welcome',
    heading: 'Creamy Hot and Ready to Serve',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
];

const HeroSlider = () => {
  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div 
                className="relative h-full w-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/60" />
                
                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <span className="font-script text-[var(--color-primary)] text-3xl md:text-5xl block mb-2 drop-shadow-md">{slide.subheading}</span>
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white uppercase font-bold mb-6 tracking-wide leading-tight drop-shadow-xl">
                        {slide.heading}
                      </h1>
                      <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-light drop-shadow-md">
                        {slide.desc}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/shop" className="bg-[var(--color-primary)] text-white px-8 py-4 uppercase tracking-[2px] text-sm hover:bg-slate-900 hover:text-white transition-colors duration-300 rounded-lg shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-none font-bold inline-block">
                          Order Now
                        </Link>
                        <Link to="/menu" className="bg-transparent border-2 border-white text-white px-8 py-4 uppercase tracking-[2px] text-sm hover:bg-white hover:text-slate-900 transition-colors duration-300 rounded-lg backdrop-blur-sm font-bold shadow-lg inline-block">
                          View Menu
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Swiper Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          opacity: 1;
        }
      `}} />
    </section>
  );
};

export default HeroSlider;
