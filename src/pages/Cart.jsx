import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useCart } from '../context/CartContext';
import { FiTrash2 } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const delivery = subtotal > 0 ? 5.00 : 0;
  const total = subtotal + delivery;

  return (
    <div className="bg-[#fbfaf8] min-h-screen">
      <PageHeader title="Your Cart" bgImage="/images/bg_3.jpg" />
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          
          {cartItems.length === 0 ? (
            <div className="text-center bg-white p-16 rounded-3xl shadow-xl shadow-slate-200/50 max-w-2xl mx-auto">
              <div className="text-6xl mb-6">🛒</div>
              <h2 className="text-3xl font-heading text-slate-900 font-bold mb-4">Your cart is empty</h2>
              <p className="text-slate-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Link to="/menu" className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-[2px] shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-none hover:bg-slate-900 transition-all duration-300">
                Return to Menu
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Cart Items */}
              <div className="lg:w-2/3 space-y-6">
                <h2 className="text-3xl font-heading text-slate-900 font-bold mb-8">Shopping Cart</h2>
                <AnimatePresence>
                  {cartItems.map(item => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 flex flex-col sm:flex-row items-center gap-6 border border-slate-100 group"
                    >
                      <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      <div className="flex-grow text-center sm:text-left">
                        <h3 className="text-xl font-heading text-slate-900 font-bold mb-1">{item.name}</h3>
                        <p className="text-[var(--color-primary)] font-bold text-lg mb-4">{item.price}</p>
                        
                        <div className="flex items-center justify-center sm:justify-start gap-6">
                          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg h-10 px-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="px-3 text-slate-500 hover:text-[var(--color-primary)] font-bold">-</button>
                            <input type="text" value={item.quantity} readOnly className="w-8 bg-transparent text-center text-slate-900 font-bold outline-none text-sm" />
                            <button onClick={() => updateQuantity(item.id, 1)} className="px-3 text-slate-500 hover:text-[var(--color-primary)] font-bold">+</button>
                          </div>
                          
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                            title="Remove item"
                          >
                            <FiTrash2 size={20} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-right hidden sm:block">
                        <p className="text-sm text-slate-500 mb-1">Total</p>
                        <p className="text-xl font-bold text-slate-900">
                          ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-slate-200/50 sticky top-32 border border-slate-100">
                  <h3 className="text-2xl font-heading text-slate-900 font-bold mb-6 border-b border-slate-100 pb-4">Cart Totals</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal</span>
                      <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Delivery</span>
                      <span className="font-medium text-slate-900">${delivery.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-slate-900 font-bold text-xl mb-8 border-t border-slate-100 pt-6">
                    <span>Total</span>
                    <span className="text-[var(--color-primary)]">${total.toFixed(2)}</span>
                  </div>
                  
                  <Link 
                    to="/checkout"
                    className="block text-center w-full bg-[var(--color-primary)] text-white py-4 rounded-xl uppercase tracking-[2px] font-bold text-sm shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-none hover:bg-slate-900 transition-all duration-300"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
              
            </div>
          )}
          
        </div>
      </section>
    </div>
  );
};

export default Cart;
