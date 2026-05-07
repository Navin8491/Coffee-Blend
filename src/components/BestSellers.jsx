import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const bestSellers = [
  { id: 'bs-1', img: "/images/menu-1.jpg", title: "Coffee Capuccino", desc: "A small river named Duden flows by their place and supplies", price: "$5.90" },
  { id: 'bs-2', img: "/images/menu-2.jpg", title: "Coffee Capuccino", desc: "A small river named Duden flows by their place and supplies", price: "$5.90" },
  { id: 'bs-3', img: "/images/menu-3.jpg", title: "Coffee Capuccino", desc: "A small river named Duden flows by their place and supplies", price: "$5.90" },
  { id: 'bs-4', img: "/images/menu-4.jpg", title: "Coffee Capuccino", desc: "A small river named Duden flows by their place and supplies", price: "$5.90" },
];

const BestSellers = () => {
  const { addToCart } = useCart();

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
            <h2 className="text-4xl lg:text-5xl font-heading text-slate-900 font-bold tracking-wide mb-4">Best Coffee Sellers</h2>
            <p className="text-slate-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100"
            >
              <div className="h-64 mb-6 overflow-hidden rounded-xl shadow-md">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-heading text-slate-900 mb-2 font-bold"><a href="#" className="hover:text-[var(--color-primary)] transition-colors">{item.title}</a></h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
              <p className="text-[var(--color-primary)] font-bold mb-4">{item.price}</p>
              <button 
                onClick={() => addToCart({ id: item.id, name: item.title, price: item.price, img: item.img })}
                className="bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-2 uppercase tracking-[1px] text-xs font-bold hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300 rounded-lg"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSellers;
