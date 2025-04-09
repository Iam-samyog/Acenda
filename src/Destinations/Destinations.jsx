import React ,{useEffect} from "react";
import Nav from "./Nav";
import SubscriptionComponent from "../components/SubscriptionComponent";
import Footer from "../Footer";
import ListDestinations from "./ListDestinations";
import MaldivesExploration from "../components/MaldivesExploration";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Destinations = () => {
     useEffect(() => {
        AOS.init({
          duration: 2500, // animation duration in ms
          once: true,     // whether animation should happen only once
        });
      }, []);
  return (
    <>
  <div className="sticky top-0 z-50 bg-gradient-to-t bg-blue-400 to-[#0081B0] pb-5 shadow-md">
  <Nav />
</div>
<div data-aos="fade-right">
    <MaldivesExploration/>
    </div>
<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1350px]">
  
 
    <div className="w-full" data-aos="fade-up">
      <ListDestinations />
    </div>
    
</div>
<div className="border-t-3 border-gray-300"></div>
<div className="  my-16 md:my-[100px]" data-aos='fade-right'>
  <SubscriptionComponent />
</div>

<div className="mt-16 md:mt-[100px]" data-aos="fade-up">
  <Footer />
</div>
    </>
  );
};

export default Destinations;
