import React from 'react';
import PageHeader from '../components/PageHeader';
import MapAppointmentSection from '../components/MapAppointmentSection';

const Contact = () => {
  return (
    <div>
      <PageHeader title="Contact Us" bgImage="/images/bg_3.jpg" />
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            <div className="p-6">
              <h3 className="text-white text-xl font-heading mb-4">Address</h3>
              <p className="text-gray-400 leading-relaxed">198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-heading mb-4">Contact Number</h3>
              <p className="text-[var(--color-primary)] hover:underline cursor-pointer leading-relaxed">+ 1235 2355 98</p>
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-heading mb-4">Email Address</h3>
              <p className="text-[var(--color-primary)] hover:underline cursor-pointer leading-relaxed">info@yoursite.com</p>
            </div>
          </div>
        </div>
      </section>
      <MapAppointmentSection />
    </div>
  );
};

export default Contact;
