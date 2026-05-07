import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-64 md:h-80 group overflow-hidden cursor-pointer"
          >
            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
              <FiSearch className="text-white text-3xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
