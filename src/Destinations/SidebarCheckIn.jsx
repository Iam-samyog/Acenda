import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const SidebarCheckIn = () => {
  const [location, setLocation] = useState('');
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  const locations = [
    'Paris, France',
    'Bali, Indonesia',
    'Tokyo, Japan',
    'New York, USA',
    'Rome, Italy',
  ];

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setIsLocationDropdownOpen(false);
  };

  const handleDateChange = (date, type) => {
    if (type === 'checkIn') {
      setCheckInDate(date);
      setIsCheckInOpen(false);
    } else {
      setCheckOutDate(date);
      setIsCheckOutOpen(false);
    }
  };

  const handleGuestChange = (type, operation) => {
    setGuests(prev => {
      const updated = { ...prev };
      if (operation === 'increase') {
        updated[type] += 1;
      } else if (operation === 'decrease' && updated[type] > 0) {
        updated[type] -= 1;
      }
      return updated;
    });
  };

  const totalGuests = guests.adults + guests.children + guests.infants;

  // Helper function to generate calendar dates
  const generateCalendarDates = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const calendar = [];
    let dayCounter = 1;
    
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          week.push(null);
        } else {
          week.push(dayCounter);
          dayCounter++;
        }
      }
      calendar.push(week);
      if (dayCounter > daysInMonth) break;
    }
    
    return calendar;
  };

  // Get current date info
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  // Generate calendar for current month
  const calendarDates = generateCalendarDates(currentMonth, currentYear);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setIsLocationDropdownOpen(false);
    setIsCheckInOpen(false);
    setIsCheckOutOpen(false);
    setIsGuestsOpen(false);
  };

  return (

    
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/public/img/Property/Rectangle 6 (3).png')" }}>
      <div className="h-full w-full bg-black bg-opacity-40 px-4 pt-6 flex flex-col items-center">
        {/* Title - top positioned */}
        <div className="mb-8 text-center mt-16">
          <h2 className="text-3xl font-semibold text-white">Find Your Stay</h2>
          <p className="text-lg text-white text-opacity-80">Book with Acenda today</p>
        </div>
        
        {/* Search Form - increased width for larger screens */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
          {/* Location */}
          <div className="relative border-b border-gray-200">
            <button 
              className="w-full p-4 flex items-center text-left"
              onClick={(e) => {
                e.stopPropagation();
                closeAllDropdowns();
                setIsLocationDropdownOpen(!isLocationDropdownOpen);
              }}
            >
              <div className="mr-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-500">Location</div>
                <div className="text-base text-gray-800">{location || 'Add destination'}</div>
              </div>
            </button>
            
            {isLocationDropdownOpen && (
              <div className="absolute left-0 right-0 bg-white shadow-lg z-20 max-h-64 overflow-y-auto">
                {locations.map((loc) => (
                  <div 
                    key={loc} 
                    className="px-6 py-3 hover:bg-blue-50 cursor-pointer text-base"
                    onClick={() => handleLocationSelect(loc)}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Check-in Date */}
          <div className="relative border-b border-gray-200">
            <button 
              className="w-full p-4 flex items-center text-left"
              onClick={(e) => {
                e.stopPropagation();
                closeAllDropdowns();
                setIsCheckInOpen(!isCheckInOpen);
              }}
            >
              <div className="mr-4 text-gray-400">
                <Calendar size={24} />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-500">Check in</div>
                <div className="text-base text-gray-800">{checkInDate || 'Add dates'}</div>
              </div>
            </button>
            
            {isCheckInOpen && (
              <div className="absolute left-0 right-0 bg-white shadow-lg z-20 p-4">
                <div className="mb-3 font-medium text-base">{monthNames[currentMonth]} {currentYear}</div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-sm font-medium text-gray-500 py-2">{day}</div>
                  ))}
                  
                  {calendarDates.flat().map((day, index) => (
                    <div 
                      key={index} 
                      className={`py-2 text-sm rounded-full w-8 h-8 flex items-center justify-center mx-auto ${
                        day ? 'hover:bg-blue-100 cursor-pointer' : ''
                      } ${day === today.getDate() ? 'bg-blue-500 text-white' : ''}`}
                      onClick={() => day && handleDateChange(`${monthNames[currentMonth].slice(0, 3)} ${day}`, 'checkIn')}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Check-out Date */}
          <div className="relative border-b border-gray-200">
            <button 
              className="w-full p-4 flex items-center text-left"
              onClick={(e) => {
                e.stopPropagation();
                closeAllDropdowns();
                setIsCheckOutOpen(!isCheckOutOpen);
              }}
            >
              <div className="mr-4 text-gray-400">
                <Calendar size={24} />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-500">Check out</div>
                <div className="text-base text-gray-800">{checkOutDate || 'Add dates'}</div>
              </div>
            </button>
            
            {isCheckOutOpen && (
              <div className="absolute left-0 right-0 bg-white shadow-lg z-20 p-4">
                <div className="mb-3 font-medium text-base">{monthNames[currentMonth]} {currentYear}</div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-sm font-medium text-gray-500 py-2">{day}</div>
                  ))}
                  
                  {calendarDates.flat().map((day, index) => (
                    <div 
                      key={index} 
                      className={`py-2 text-sm rounded-full w-8 h-8 flex items-center justify-center mx-auto ${
                        day ? 'hover:bg-blue-100 cursor-pointer' : ''
                      } ${day === today.getDate() ? 'bg-blue-500 text-white' : ''}`}
                      onClick={() => day && handleDateChange(`${monthNames[currentMonth].slice(0, 3)} ${day}`, 'checkOut')}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Guests */}
          <div className="relative">
            <button 
              className="w-full p-4 flex items-center text-left"
              onClick={(e) => {
                e.stopPropagation();
                closeAllDropdowns();
                setIsGuestsOpen(!isGuestsOpen);
              }}
            >
              <div className="mr-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-500">Guests</div>
                <div className="text-base text-gray-800">{totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? 's' : ''}` : 'Add guests'}</div>
              </div>
            </button>
            
            {isGuestsOpen && (
              <div className="absolute left-0 right-0 bg-white shadow-lg z-20 p-4">
                {['adults', 'children', 'infants'].map((type) => (
                  <div key={type} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-medium capitalize text-base">{type}</div>
                      <div className="text-sm text-gray-500">
                        {type === 'adults' ? 'Ages 13+' : type === 'children' ? 'Ages 2-12' : 'Under 2'}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button 
                        className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center ${guests[type] === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700'}`}
                        onClick={() => handleGuestChange(type, 'decrease')}
                        disabled={guests[type] === 0}
                      >
                        -
                      </button>
                      <span className="mx-3 w-6 text-center text-base">{guests[type]}</span>
                      <button 
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
                        onClick={() => handleGuestChange(type, 'increase')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Search Button */}
          <div className="p-4">
            <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCheckIn;