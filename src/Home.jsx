import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import CheckIn from './components/CheckIn';
import Choose from './components/Choose';
import Partners from './components/Partners';
import LuxuryPropertyBooking from './components/LuxuryPropertyBooking ';
import MaldivesExploration from './components/MaldivesExploration';
import SubscriptionComponent from './components/SubscriptionComponent';
import Footer from './Footer';
import FeatureNewsCarousel from './components/FeatureNewsCarousel';
import TestimonialsSwiper from './components/TestimonialsSwiper';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <div className="w-full">
      <div className="relative h-64 sm:h-96 md:h-[500px] lg:h-[600px]">
        {/* Background Image */}
        <img
          src="/img/image 7 (1).png"
          alt="Background"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />

        {/* Navbar on top of image */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* CheckIn box - repositioned for mobile */}
        <div className="absolute bottom-[-495px]  sm:-bottom md:-bottom-40 lg:-bottom-48 xl:-bottom-[180px] left-0 sm:left-4 md:left-10 lg:left-17 xl:left-[100px] right-0 z-20 ">
          <div className="container mx-auto px-4 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-[1350px]"  data-aos="fade-up">
            <CheckIn />
          </div>
        </div>
      </div>
      
      {/* Adjusted padding to create space for the overlap */}
      <div className="pt-16 sm:pt-24 md:pt-32 lg:pt-48 xl:pt-[180px]"></div>
      {/* <p className='mt-15'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iste eum consectetur error tempore modi adipisci officia ab assumenda est labore, molestias quos atque accusamus sapiente omnis illum quia eveniet?</p> */}
    
    <div className='mt-[400px] md:mt-[0px]'data-aos="fade-right">
      <Choose/>
    </div>
    <div>
    <Partners/>
    </div>
    <div className='mt-[50px]' data-aos="fade-left">
      <LuxuryPropertyBooking/>
    </div>
    <div className='mt-[50px]'>
      <MaldivesExploration/>
    </div>
    <div className='my-[100px]' data-aos='slide-right'>
    <FeatureNewsCarousel/>
    </div>
    <div className='my-[100px]' >
  <TestimonialsSwiper/>
    </div>
    <div className='my-[100px]' data-aos='fade-right'>
      <SubscriptionComponent/>
    </div>
   
    <div className='mt-[100px]' data-aos="fade-up">
      <Footer/>
    </div>
   

    </div>
    
  );
};

export default Home;