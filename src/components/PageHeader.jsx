import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, bgImage }) => {
  return (
    <section className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="relative z-10 text-center px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-heading text-white uppercase font-bold tracking-wide drop-shadow-lg">
            {title}
          </h1>
          <div className="flex justify-center items-center gap-2 mt-4 text-sm font-medium uppercase tracking-wider">
            <Link to="/" className="text-white hover:text-[var(--color-primary)] cursor-pointer transition-colors drop-shadow">Home</Link>
            <span className="text-slate-300 drop-shadow">&gt;</span>
            <span className="text-[var(--color-primary)] drop-shadow">{title}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
