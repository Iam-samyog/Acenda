import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const MaldivesExploration = () => {
  const destinations = [
    {
      id: 1,
      name: 'Azure Haven',
      imageUrl: '/public/img/Rectangle 53.png',
    },
    {
      id: 2,
      name: 'Serene Sanctuary',
      imageUrl: '/public/img/Rectangle 54.png',
    },
    {
      id: 3,
      name: 'Verdant Vista',
      imageUrl: '/public/img/Rectangle 54 (1).png',
    }
  ];

  return (
   <>

 <div className="conatiner ">
    <div className="relative w-full max-h-auto mb-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/public/img/image 13.png" 
          alt="Maldives Aerial View" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto max-w-[1350px] px-4 pt-30 pb-16 flex flex-col h-full">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl  sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-12">EXPLORE MALDIVES</h1>
          <div className="w-full h-px bg-white bg-opacity-50 mb-8"></div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col  lg:flex-row items-start justify-between">
          {/* Left Side Text */}
          <div className=" w-full md:w-full lg:w-2/4 mb-8 pr-10 lg:mb-0">
            <p className="text-white text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <button className='mt-8 bg-white text-black px-6 py-3 rounded-full inline-flex items-center font-medium transform transition-all duration-300 hover:scale-x-110 hover:bg-black hover:text-white hover:border-white border-2 border-transparent'>
              See all
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          {/* Right Side Destinations */}
          <div className="w-full md:w-full  lg:w-2/4 grid grid-cols-1  md:grid-cols-3 gap-4">
            {destinations.map((destination) => (
              <div key={destination.id} className="flex flex-col hover:scale-105 transform transition duration-300 ease-in-out">
                <div className="rounded-lg overflow-hidden mb-3">
                  <img 
                    src={destination.imageUrl} 
                    alt={destination.name}
                    className="w-full h-64 object-cover "
                  />
                </div>
                <h3 className="text-white text-lg font-medium text-center">{destination.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default MaldivesExploration;