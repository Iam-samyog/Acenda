import React, { useState } from 'react';

const SubscriptionComponent = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle subscription logic here
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-gray-100 rounded-[102px]  ">
      <div className="flex mb-5 md:mb-0 flex-col md:flex-row border border-blue-200 border-dotted rounded-[22px] md:rounded-[42px] overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-full sm:w-full mb-5 md:mb-0  md:w-1/3">
          <img 
            src="/public/img/Rectangle 45.png" 
            alt="Luxury villa with pool and ocean view" 
            className="w-full h-full md:w-[428px] md:h-[360px]  object-cover"
          />
        </div>
        
        {/* Right Side - Subscription Form */}
        <div className="w-full md:w-2/3 bg-gray-100 px-8 flex flex-col justify-center">
          <div className="  md:text-left mb-4">
            <h2 className="text-[20px] sm:text-[32px]    md:text-[32px] text-center font-bold text-gray-800">Get special offers, and more from travel world</h2>
            {/* <h2 className="text-2xl font-bold text-gray-800"></h2> */}
          </div>
          
          <form onSubmit={handleSubmit} className="flex w-full justify-center items-center flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow  py-3 px-4 mb-5 md:mb-0 bg-white rounded-full mr-2 p-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <div className='text-center mb-5 md:mb-0 '>
            <button 
              type="submit" 
              className="bg-[#008395]  hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200"
            >
              Subscribe
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionComponent;