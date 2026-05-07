import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const products = {
  mainDish: [
    { id: 'md-1', name: 'Grilled Beef', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', price: '$2.90', img: '/images/dish-1.jpg' },
    { id: 'md-2', name: 'Grilled Beef', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', price: '$2.90', img: '/images/dish-2.jpg' },
    { id: 'md-3', name: 'Grilled Beef', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', price: '$2.90', img: '/images/dish-3.jpg' },
  ],
  drinks: [
    { id: 'dr-1', name: 'Lemonade Juice', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', price: '$2.90', img: '/images/drink-1.jpg' },
    { id: 'dr-2', name: 'Pineapple Juice', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', price: '$2.90', img: '/images/drink-2.jpg' },
    { id: 'dr-3', name: 'Soda Drinks', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', price: '$2.90', img: '/images/drink-3.jpg' },
  ],
  desserts: [
    { id: 'de-1', name: 'Hot Cake Honey', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', price: '$2.90', img: '/images/dessert-1.jpg' },
    { id: 'de-2', name: 'Hot Cake Honey', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', price: '$2.90', img: '/images/dessert-2.jpg' },
    { id: 'de-3', name: 'Hot Cake Honey', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', price: '$2.90', img: '/images/dessert-3.jpg' },
  ]
};

const ProductsTab = () => {
  const [activeTab, setActiveTab] = useState('mainDish');
  const { addToCart } = useCart();

  const tabs = [
    { id: 'mainDish', label: 'Main Dish' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'desserts', label: 'Desserts' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-script text-[var(--color-primary)] text-3xl block mb-2">Discover</span>
            <h2 className="text-4xl lg:text-5xl font-heading text-slate-900 font-bold tracking-wide mb-4">Our Products</h2>
            <p className="text-slate-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 uppercase tracking-[1px] text-sm font-bold transition-all duration-300 rounded-full ${
                  activeTab === tab.id 
                    ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:shadow-md'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {products[activeTab].map((item) => (
                  <div key={item.id} className="text-center group bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-[var(--color-primary)] transition-all duration-300">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-lg font-heading text-slate-900 mb-2 font-bold"><a href="#" className="hover:text-[var(--color-primary)] transition-colors">{item.name}</a></h3>
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
                    <p className="text-[var(--color-primary)] font-bold mb-4">{item.price}</p>
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-2 uppercase tracking-[1px] text-xs font-bold hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300 rounded-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsTab;
