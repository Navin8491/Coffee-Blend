import React from 'react';
import HeroSlider from '../components/HeroSlider';
import IntroSection from '../components/IntroSection';
import AboutStory from '../components/AboutStory';
import ServicesSection from '../components/ServicesSection';
import MenuPreview from '../components/MenuPreview';
import CounterSection from '../components/CounterSection';
import BestSellers from '../components/BestSellers';
import GallerySection from '../components/GallerySection';
import ProductsTab from '../components/ProductsTab';
import TestimonySection from '../components/TestimonySection';
import RecentBlogPreview from '../components/RecentBlogPreview';
import MapAppointmentSection from '../components/MapAppointmentSection';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <IntroSection />
      <AboutStory />
      <ServicesSection />
      <MenuPreview />
      <CounterSection />
      <BestSellers />
      <GallerySection />
      <ProductsTab />
      <TestimonySection />
      <RecentBlogPreview />
      <MapAppointmentSection />
    </div>
  );
};

export default Home;
