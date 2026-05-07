import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { useCart } from '../context/CartContext';

const ProductSingle = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = {
    id: 's-1',
    name: 'Creamy Mocha',
    price: '$4.90',
    img: '/images/menu-2.jpg'
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader title="Product Detail" bgImage="/images/bg_3.jpg" />
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 lg:p-12 rounded-3xl shadow-2xl shadow-slate-200/50">
            
            {/* Image */}
            <div className="lg:w-1/2">
              <a href="#" className="block h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </a>
            </div>

            {/* Details */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl font-heading text-slate-900 mb-4 font-bold">{product.name}</h2>
              <p className="text-2xl text-[var(--color-primary)] font-bold mb-6">{product.price}</p>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
              
              <div className="mb-8">
                <label className="text-slate-900 mb-4 block font-bold">Size</label>
                <div className="flex flex-wrap gap-4">
                  {['Small', 'Medium', 'Large', 'Extra Large'].map((size, idx) => (
                    <button key={idx} className="bg-slate-50 border border-slate-200 text-slate-600 px-6 py-3 rounded-xl font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-white hover:shadow-md transition-all">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl h-14 px-2 shadow-sm">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 text-slate-600 hover:text-[var(--color-primary)] text-xl font-bold">-</button>
                  <input type="text" value={quantity} readOnly className="w-12 bg-transparent text-center text-slate-900 font-bold outline-none" />
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 text-slate-600 hover:text-[var(--color-primary)] text-xl font-bold">+</button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="bg-[var(--color-primary)] text-white px-8 h-14 rounded-xl uppercase tracking-[2px] font-bold shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-none hover:bg-slate-900 transition-all duration-300 w-full sm:w-auto"
                >
                  Add to Cart
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSingle;
