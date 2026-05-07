import React from 'react';
import { BiMessageRounded } from 'react-icons/bi';
import { motion } from 'framer-motion';

const blogs = [
  { img: "/images/image_1.jpg", date: "Sept 10, 2018", author: "Admin", comments: 3, title: "The Delicious Pizza", desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia." },
  { img: "/images/image_2.jpg", date: "Sept 10, 2018", author: "Admin", comments: 3, title: "The Delicious Pizza", desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia." },
  { img: "/images/image_3.jpg", date: "Sept 10, 2018", author: "Admin", comments: 3, title: "The Delicious Pizza", desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia." }
];

const RecentBlogPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading text-slate-900 font-bold tracking-wide mb-4">Recent from blog</h2>
            <p className="text-slate-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <a href="#" className="block h-64 overflow-hidden">
                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </a>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-slate-400 mb-3 font-medium uppercase tracking-wider">
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">{blog.date}</a>
                  <span>|</span>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">{blog.author}</a>
                  <span>|</span>
                  <a href="#" className="flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors">
                    <BiMessageRounded /> {blog.comments}
                  </a>
                </div>
                <h3 className="text-xl font-heading text-slate-900 mb-3 font-bold"><a href="#" className="hover:text-[var(--color-primary)] transition-colors">{blog.title}</a></h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {blog.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentBlogPreview;
