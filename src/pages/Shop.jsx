import React from 'react';
import PageHeader from '../components/PageHeader';
import ProductsTab from '../components/ProductsTab';

const Shop = () => {
  return (
    <div>
      <PageHeader title="Shop" bgImage="/images/bg_3.jpg" />
      <ProductsTab />
    </div>
  );
};

export default Shop;
