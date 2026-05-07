import React from 'react';
import { Link } from 'react-router-dom';
import { FiTwitter, FiFacebook, FiInstagram, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { BiCalendar, BiUser, BiMessageRounded } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="relative bg-slate-100 pt-20 pb-10 text-slate-600">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Us */}
          <div>
            <h2 className="text-xl font-heading text-slate-900 mb-6 uppercase tracking-wider font-bold">About Us</h2>
            <p className="mb-8 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Recent Blog */}
          <div>
            <h2 className="text-xl font-heading text-slate-900 mb-6 uppercase tracking-wider font-bold">Recent Blog</h2>
            <div className="space-y-6">
              {[1, 2].map((item) => (
                <div key={item} className="flex gap-4 group">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                    <img src={`/images/image_${item}.jpg`} alt="blog" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 text-sm font-medium leading-snug mb-2 hover:text-[var(--color-primary)] cursor-pointer transition-colors">
                      <Link to="/blog">Even the all-powerful Pointing has no control about</Link>
                    </h3>
                    <div className="flex flex-wrap items-center text-[11px] text-slate-500 gap-3 opacity-80">
                      <span className="flex items-center gap-1"><BiCalendar /> Sept 15, 2018</span>
                      <span className="flex items-center gap-1"><BiUser /> Admin</span>
                      <span className="flex items-center gap-1"><BiMessageRounded /> 19</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-heading text-slate-900 mb-6 uppercase tracking-wider font-bold">Services</h2>
            <ul className="space-y-3">
              {['Cooked', 'Deliver', 'Quality Foods', 'Mixed'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Have a Questions? */}
          <div>
            <h2 className="text-xl font-heading text-slate-900 mb-6 uppercase tracking-wider font-bold">Have a Questions?</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <FiMapPin className="text-[var(--color-primary)] flex-shrink-0 mt-1" size={20} />
                <span className="leading-relaxed">203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex gap-4">
                <FiPhone className="text-[var(--color-primary)] flex-shrink-0 mt-1" size={20} />
                <a href="tel:+23923929210" className="hover:text-[var(--color-primary)] transition-colors">+2 392 3929 210</a>
              </li>
              <li className="flex gap-4">
                <FiMail className="text-[var(--color-primary)] flex-shrink-0 mt-1" size={20} />
                <a href="mailto:info@yourdomain.com" className="hover:text-[var(--color-primary)] transition-colors">info@yourdomain.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 mt-8 border-t border-slate-200 text-center text-sm">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <span className="text-red-500">&hearts;</span> by <a href="https://colorlib.com" target="_blank" rel="noreferrer" className="text-[var(--color-primary)] hover:underline">Colorlib</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
