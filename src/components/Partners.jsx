import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Removed: import 'swiper/css/pagination';
// Removed: Pagination module

export default function Partners() {
  const partners = [
    '/public/img/partners/Frame 1160.png',
    '/public/img/partners/Frame 1161.png',
    '/public/img/partners/Frame 1162.png',
    '/public/img/partners/Frame 1163.png',
    '/public/img/partners/Frame 1164.png',
    '/public/img/partners/Frame 1165 (1).png',
    '/public/img/partners/Frame 1160.png',
    '/public/img/partners/Frame 1161.png',
    '/public/img/partners/Frame 1162.png',
    '/public/img/partners/Frame 1163.png',
    '/public/img/partners/Frame 1164.png',
    '/public/img/partners/Frame 1165 (1).png',
    '/public/img/partners/Frame 1160.png',
    '/public/img/partners/Frame 1161.png',
    '/public/img/partners/Frame 1162.png',
    '/public/img/partners/Frame 1163.png',
    '/public/img/partners/Frame 1164.png',
    '/public/img/partners/Frame 1165 (1).png',
    
  ];

  return (
    <div className='container mx-auto px-4 py-10'>
      <div className="text-center mb-[72px]">
        <h2 className='font-bold text-3xl md:text-[40px] uppercase'>Our Partners</h2>
      </div>

      <Swiper
        spaceBetween={30}
        // Removed pagination here
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 60,
          }
        }}
        // Removed: modules={[Pagination]}
        className="mySwiper"
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className='flex justify-center items-center h-full'>
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className='w-28 md:w-32 lg:w-40 object-contain'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
