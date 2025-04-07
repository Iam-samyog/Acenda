import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const CheckIn = () => {
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
    'Barcelona, Spain',
    'London, UK',
    'Sydney, Australia',
    'Santorini, Greece',
    'Cancun, Mexico'
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

  // Close all dropdowns when clicking outside
  

  return (
    <div className="bg-white shadow-xl rounded-3xl max-w-[1210px] mb-10 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center w-full">
      <div className="w-full max-w-6xl rounded-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-2 headings">Good Morning!</h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-800 mb-4 sm:mb-6 lg:mb-8">
          Explore beautiful places in the world with Acenda
        </p>
        
        {/* Search Bar */}
        <div className="bg-white border rounded-lg md:rounded-full p-2 md:p-3 shadow-lg flex flex-col md:flex-row items-stretch">
          {/* Location Dropdown */}
          <div className="relative w-full md:w-1/4 mb-2 md:mb-0 md:border-r border-gray-600">
            <button 
              className="w-full p-2 flex items-center text-left rounded-lg md:rounded-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsLocationDropdownOpen(!isLocationDropdownOpen);
                setIsCheckInOpen(false); 
                setIsCheckOutOpen(false);
                setIsGuestsOpen(false);
              }}
            >
              <div className="mr-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-gray-500">Location</div>
                <div className="text-sm sm:text-base text-gray-800">{location || 'Add destination'}</div>
              </div>
            </button>
            
            {isLocationDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-lg shadow-xl z-10 max-h-48 sm:max-h-60 overflow-y-auto">
                {locations.map((loc) => (
                  <div 
                    key={loc} 
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm sm:text-base"
                    onClick={() => handleLocationSelect(loc)}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Check-in Date */}
          <div className="relative w-full md:w-1/4 mb-2 md:mb-0 md:border-r border-gray-600">
            <button 
              className="w-full p-2 flex items-center text-left rounded-lg md:rounded-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsCheckInOpen(!isCheckInOpen);
                setIsCheckOutOpen(false);
                setIsLocationDropdownOpen(false);
                setIsGuestsOpen(false);
              }}
            >
              <div className="mr-2 text-gray-400">
                <Calendar size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-gray-500">Check in</div>
                <div className="text-sm sm:text-base text-gray-800">{checkInDate || 'Add dates'}</div>
              </div>
            </button>
            
            {isCheckInOpen && (
              <div className="absolute left-0 right-0 md:right-auto md:w-64 lg:w-72 top-full mt-2 bg-white rounded-lg shadow-xl z-10 p-3 sm:p-4">
                <div className="mb-2 font-medium text-sm sm:text-base">{monthNames[currentMonth]} {currentYear}</div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-xs font-medium text-gray-500 py-1">{day}</div>
                  ))}
                  
                  {calendarDates.flat().map((day, index) => (
                    <div 
                      key={index} 
                      className={`py-1 text-xs sm:text-sm rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mx-auto ${
                        day ? 'hover:bg-blue-100 cursor-pointer' : ''
                      } ${day === today.getDate() ? 'bg-blue-500 text-white' : ''}`}
                      onClick={() => day && handleDateChange(`${monthNames[currentMonth].slice(0, 3)} ${day}, ${currentYear}`, 'checkIn')}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Check-out Date */}
          <div className="relative w-full md:w-1/4 mb-2 md:mb-0 md:border-r border-gray-600">
            <button 
              className="w-full p-2 flex items-center text-left rounded-lg md:rounded-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsCheckOutOpen(!isCheckOutOpen);
                setIsCheckInOpen(false);
                setIsLocationDropdownOpen(false);
                setIsGuestsOpen(false);
              }}
            >
              <div className="mr-2 text-gray-400">
                <Calendar size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-gray-500">Check out</div>
                <div className="text-sm sm:text-base text-gray-800">{checkOutDate || 'Add dates'}</div>
              </div>
            </button>
            
            {isCheckOutOpen && (
              <div className="absolute left-0 right-0 md:right-auto md:w-64 lg:w-72 top-full mt-2 bg-white rounded-lg shadow-xl z-10 p-3 sm:p-4">
                <div className="mb-2 font-medium text-sm sm:text-base">{monthNames[currentMonth]} {currentYear}</div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-xs font-medium text-gray-500 py-1">{day}</div>
                  ))}
                  
                  {calendarDates.flat().map((day, index) => (
                    <div 
                      key={index} 
                      className={`py-1 text-xs sm:text-sm rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mx-auto ${
                        day ? 'hover:bg-blue-100 cursor-pointer' : ''
                      } ${day === today.getDate() ? 'bg-blue-500 text-white' : ''}`}
                      onClick={() => day && handleDateChange(`${monthNames[currentMonth].slice(0, 3)} ${day}, ${currentYear}`, 'checkOut')}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Guests */}
          <div className="relative w-full md:w-1/4 flex">
            <button 
              className="flex-grow p-2 flex items-center text-left rounded-lg md:rounded-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsGuestsOpen(!isGuestsOpen);
                setIsCheckInOpen(false);
                setIsCheckOutOpen(false);
                setIsLocationDropdownOpen(false);
              }}
            >
              <div className="mr-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-gray-500">Guests</div>
                <div className="text-sm sm:text-base text-gray-800">{totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? 's' : ''}` : 'Add guests'}</div>
              </div>
            </button>
            
            <button className="primary-color text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center self-center ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {isGuestsOpen && (
              <div className="absolute left-0 right-0 md:right-auto md:w-64 lg:w-72 top-full mt-2 bg-white rounded-lg shadow-xl z-10 p-3 sm:p-4">
                {['adults', 'children', 'infants'].map((type) => (
                  <div key={type} className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-medium capitalize text-sm sm:text-base">{type}</div>
                      <div className="text-xs sm:text-sm text-gray-500">
                        {type === 'adults' ? 'Ages 13 or above' : type === 'children' ? 'Ages 2-12' : 'Under 2'}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button 
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center ${guests[type] === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700'}`}
                        onClick={() => handleGuestChange(type, 'decrease')}
                        disabled={guests[type] === 0}
                      >
                        -
                      </button>
                      <span className="mx-2 sm:mx-3 w-4 sm:w-6 text-center text-sm sm:text-base">{guests[type]}</span>
                      <button 
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
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
        </div>
      </div>
    </div>
  );
};

export default CheckIn;