import React from 'react';
import { StarIcon, MapPinIcon, ChevronRightIcon } from 'lucide-react';

const LuxuryPropertyBooking = () => {
  const properties = [
    {
      id: 1,
      name: 'The Oasis',
      price: '$10,000',
      location: 'Rio de Janeiro, Brazil',
      rating: 4.2,
      imageUrl: '/img/Property/Rectangle 6.png',
      row: 1,
      col: 1
    },
    {
      id: 2,
      name: 'The Sanctuary',
      price: '$8,000',
      location: 'Bali, Indonesia',
      rating: 4.6,
      imageUrl: '/img/Property/Rectangle 6 (1).png',
      row: 1,
      col: 2
    },
    {
      id: 3,
      name: 'The Infinity',
      price: '$8,000',
      location: 'Sydney, Australia',
      rating: 4.6,
      imageUrl: '/img/Property/Rectangle 6 (2).png',
      row: 1,
      col: 3
    },
    {
      id: 4,
      name: 'La Maison',
      price: '$8,000',
      location: 'Barcelona, Spain',
      rating: 4.5,
      imageUrl: '/img/Property/Rectangle 6 (3).png',
      row: 1,
      col: 4
    },
    {
      id: 5,
      name: 'Serenity Shores',
      price: '$7,000',
      location: 'Sydney, Australia',
      rating: 4.4,
      imageUrl: '/img/Property/Rectangle 6 (4).png',
      row: 2,
      col: 1
    },
    {
      id: 6,
      name: 'Azure Haven',
      price: '$8,000',
      location: 'Barcelona, Spain',
      rating: 4.2, 
      imageUrl: '/img/Property/Rectangle 6 (5).png',
      row: 2,
      col: 2
    },
    {
      id: 7,
      name: 'Ocean Breeze',
      price: '$7,000',
      location: 'Bali, Indonesia',
      rating: 4.6,
      imageUrl: '/img/Property/Rectangle 6 (6).png',
      row: 2,
      col: 3
    },
    {
      id: 8,
      name: 'Palm Breeze',
      price: '$6,000',
      location: 'Phuket, Thailand',
      rating: 4.8,
      imageUrl: '/img/Property/Rectangle 6 (7).png',
      row: 2,
      col: 4
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-[40px] font-bold text-center mb-8">TOP BOOK NOW</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {properties.map((property) => (
          <div key={property.id} className="bg-white px-4 py-4  rounded-lg overflow-hidden hover:shadow-2xl ">
            <div className="relative">
              <img 
                src={property.imageUrl} 
                alt={property.name}
                className="w-full  h-48 md:h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-90 text-white px-2 py-1 rounded-md flex items-center">
                <StarIcon className="w-4 h-4 mr-1 text-yellow-400 " />
                <span className="text-sm">{property.rating}</span>
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-3">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-800">{property.name}</h3>
                <span className="font-bold text-gray-800 text-[18px]">{property.price}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPinIcon className="w-4 h-4 mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <button className="flex items-center px-8 py-3 border font-bold border-gray-300 rounded-full text-black  hover:bg-gray-50 transition-colors">
          See all
          <ChevronRightIcon className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default LuxuryPropertyBooking;