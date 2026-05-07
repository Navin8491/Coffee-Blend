import React from 'react';
import PageHeader from '../components/PageHeader';
import IntroSection from '../components/IntroSection';
import MenuPreview from '../components/MenuPreview';
import ProductsTab from '../components/ProductsTab';

const Menu = () => {
  return (
    <div>
      <PageHeader title="Our Menu" bgImage="/images/bg_3.jpg" />
      <IntroSection />
      <MenuPreview />
      <ProductsTab />
    </div>
  );
};

export default Menu;
