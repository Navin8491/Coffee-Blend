import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiEdit2 } from 'react-icons/fi';

const FloatingInput = ({ label, type = "text", required = true, ...props }) => {
  return (
    <div className="relative w-full z-0 mt-2 mb-6">
      <input
        type={type}
        required={required}
        placeholder=" "
        className="block py-3 px-0 w-full text-base text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-primary)] peer transition-colors duration-300"
        {...props}
      />
      <label className="absolute text-base text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--color-primary)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">
        {label}
      </label>
    </div>
  );
};

const StepHeader = ({ stepNum, title, isActive, isCompleted, onEdit }) => (
  <div className="flex items-center justify-between py-6">
    <div className="flex items-center gap-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${isActive ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30' : isCompleted ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
        {isCompleted && !isActive ? <FiCheck /> : stepNum}
      </div>
      <h3 className={`text-xl font-heading font-bold ${isActive || isCompleted ? 'text-slate-900' : 'text-slate-400'}`}>
        {title}
      </h3>
    </div>
    {isCompleted && !isActive && (
      <button onClick={onEdit} className="text-sm text-[var(--color-primary)] hover:text-slate-900 font-bold flex items-center gap-1 transition-colors">
        <FiEdit2 size={14} /> Edit
      </button>
    )}
  </div>
);

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '', phone: '', firstName: '', lastName: '',
    address: '', city: '', zip: '', paymentMethod: 'credit'
  });

  const subtotal = getCartTotal();
  const delivery = subtotal > 0 ? 5.00 : 0;
  const total = subtotal + delivery;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e, nextStep) => {
    e.preventDefault();
    setStep(nextStep);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
    setTimeout(() => navigate('/'), 3000);
  };

  if (isSuccess) {
    return (
      <div className="bg-[#fbfaf8] min-h-screen flex items-center justify-center pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl shadow-slate-200/50 text-center max-w-lg mx-auto"
        >
          <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            ✓
          </div>
          <h2 className="text-3xl font-heading text-slate-900 font-bold mb-4">Order Confirmed!</h2>
          <p className="text-slate-600 mb-8">Thank you for your purchase. We are preparing your delicious coffee right now.</p>
          <p className="text-sm text-slate-400">Redirecting to home...</p>
        </motion.div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#fbfaf8] min-h-screen">
        <PageHeader title="Checkout" bgImage="/images/bg_3.jpg" />
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-heading text-slate-900 font-bold mb-4">Your cart is empty</h2>
            <Link to="/menu" className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-[2px] shadow-lg shadow-[var(--color-primary)]/30">
              Return to Menu
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#fbfaf8] min-h-screen">
      <PageHeader title="Checkout" bgImage="/images/bg_3.jpg" />
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Form Section (Accordion) */}
            <div className="lg:w-7/12 xl:w-2/3">
              <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 lg:p-10 border border-slate-100">
                
                {/* STEP 1: Contact */}
                <div className="border-b border-slate-100">
                  <StepHeader stepNum="1" title="Contact Details" isActive={step === 1} isCompleted={step > 1} onEdit={() => setStep(1)} />
                  <AnimatePresence>
                    {step === 1 && (
                      <motion.form 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                        onSubmit={(e) => handleNextStep(e, 2)}
                      >
                        <div className="pb-8 pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                            <FloatingInput label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                            <FloatingInput label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                          </div>
                          <FloatingInput label="Email Address" type="email" name="email" value={formData.email} onChange={handleInputChange} />
                          <FloatingInput label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
                          
                          <button type="submit" className="mt-4 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-[1px] hover:bg-[var(--color-primary)] transition-colors shadow-lg hover:shadow-[var(--color-primary)]/30">
                            Continue to Shipping
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                  {step > 1 && (
                    <div className="pb-6 text-slate-500 text-sm pl-12">
                      <p>{formData.firstName} {formData.lastName} ({formData.email})</p>
                    </div>
                  )}
                </div>

                {/* STEP 2: Shipping */}
                <div className="border-b border-slate-100">
                  <StepHeader stepNum="2" title="Shipping Address" isActive={step === 2} isCompleted={step > 2} onEdit={() => setStep(2)} />
                  <AnimatePresence>
                    {step === 2 && (
                      <motion.form 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                        onSubmit={(e) => handleNextStep(e, 3)}
                      >
                        <div className="pb-8 pt-4">
                          <FloatingInput label="Street Address" name="address" value={formData.address} onChange={handleInputChange} />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                            <FloatingInput label="Town / City" name="city" value={formData.city} onChange={handleInputChange} />
                            <FloatingInput label="Postcode / ZIP" name="zip" value={formData.zip} onChange={handleInputChange} />
                          </div>
                          
                          <div className="flex gap-4 mt-4">
                            <button type="submit" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-[1px] hover:bg-[var(--color-primary)] transition-colors shadow-lg hover:shadow-[var(--color-primary)]/30">
                              Continue to Payment
                            </button>
                          </div>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                  {step > 2 && (
                    <div className="pb-6 text-slate-500 text-sm pl-12">
                      <p>{formData.address}, {formData.city} {formData.zip}</p>
                    </div>
                  )}
                </div>

                {/* STEP 3: Payment */}
                <div>
                  <StepHeader stepNum="3" title="Payment Method" isActive={step === 3} isCompleted={isSuccess} onEdit={() => setStep(3)} />
                  <AnimatePresence>
                    {step === 3 && (
                      <motion.form 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                        onSubmit={handleSubmit}
                      >
                        <div className="pb-8 pt-4 space-y-4">
                          <label className={`flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all border-2 ${formData.paymentMethod === 'credit' ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5' : 'border-slate-100 hover:border-slate-300'}`}>
                            <input type="radio" name="paymentMethod" value="credit" checked={formData.paymentMethod === 'credit'} onChange={handleInputChange} className="text-[var(--color-primary)] focus:ring-[var(--color-primary)] w-5 h-5" />
                            <div>
                              <span className="block font-bold text-slate-900 text-lg">Credit Card</span>
                              <span className="text-slate-500 text-sm">Safe and secure payment via Stripe</span>
                            </div>
                          </label>
                          <label className={`flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all border-2 ${formData.paymentMethod === 'paypal' ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5' : 'border-slate-100 hover:border-slate-300'}`}>
                            <input type="radio" name="paymentMethod" value="paypal" checked={formData.paymentMethod === 'paypal'} onChange={handleInputChange} className="text-[var(--color-primary)] focus:ring-[var(--color-primary)] w-5 h-5" />
                            <div>
                              <span className="block font-bold text-slate-900 text-lg">PayPal</span>
                              <span className="text-slate-500 text-sm">You will be redirected to PayPal</span>
                            </div>
                          </label>
                          
                          <button type="submit" className="w-full mt-8 bg-[var(--color-primary)] text-white py-5 rounded-xl uppercase tracking-[2px] font-bold shadow-xl shadow-[var(--color-primary)]/30 hover:shadow-none hover:bg-slate-900 transition-all duration-300 text-lg">
                            Place Order • ${total.toFixed(2)}
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:w-5/12 xl:w-1/3">
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 sticky top-32 border border-slate-100">
                <h3 className="text-2xl font-heading text-slate-900 font-bold mb-8">Order Summary</h3>
                
                <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-bold text-slate-900 leading-tight">{item.name}</p>
                          <span className="font-bold text-slate-900 ml-4">
                            ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        <p className="text-slate-500 text-sm">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery</span>
                    <span className="font-medium text-slate-900">${delivery.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-end text-slate-900 mt-6 pt-6 border-t border-slate-200">
                  <div>
                    <span className="block text-slate-500 text-sm mb-1">Total Amount</span>
                    <span className="text-xs font-normal text-slate-400">Including VAT</span>
                  </div>
                  <span className="text-3xl font-bold text-[var(--color-primary)]">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
