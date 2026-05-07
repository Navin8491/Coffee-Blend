import React from 'react';
import { motion } from 'framer-motion';

const MapAppointmentSection = () => {
  return (
    <section className="relative bg-white border-t border-slate-100">
      <div className="flex flex-col lg:flex-row">
        
        {/* Map Placeholder */}
        <div className="w-full lg:w-1/2 min-h-[400px] bg-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-slate-500 font-medium">Map goes here</p>
          </div>
          {/* Normally you'd embed a Google Map iframe here */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484218!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050f14!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1612345678901!5m2!1sen!2sus" 
            className="w-full h-full absolute inset-0 border-0" 
            allowFullScreen="" 
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Appointment Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 relative">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-lg mx-auto lg:mx-0 bg-white p-8 rounded-2xl shadow-2xl shadow-slate-200/50"
          >
            <h3 className="text-3xl font-heading text-slate-900 mb-8 tracking-wide font-bold">Book a Table</h3>
            <form className="space-y-6 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg text-slate-900 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none transition-all" />
                <input type="text" placeholder="Last Name" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg text-slate-900 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input type="date" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg text-slate-600 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none transition-all" />
                <input type="time" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg text-slate-600 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none transition-all" />
                <input type="tel" placeholder="Phone" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg text-slate-900 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none transition-all" />
              </div>
              <div>
                <textarea placeholder="Message" rows="4" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg text-slate-900 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none transition-all resize-none"></textarea>
              </div>
              <div>
                <button type="button" className="w-full bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-medium uppercase tracking-[2px] shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-none hover:bg-slate-900 transition-all duration-300">
                  Appointment
                </button>
              </div>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MapAppointmentSection;
