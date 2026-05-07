import React from 'react';
import PageHeader from '../components/PageHeader';
import ProductsTab from '../components/ProductsTab';

const Menu = () => {
  return (
    <div>
      <PageHeader title="Our Menu" bgImage="/images/bg_3.jpg" />
      <ProductsTab />
    </div>
  );
};

export default Menu;
