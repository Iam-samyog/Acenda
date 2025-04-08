import React from "react";
import Nav from "./Nav";
import SubscriptionComponent from "../components/SubscriptionComponent";
import Footer from "../Footer";
import ListDestinations from "./ListDestinations";
import MaldivesExploration from "../components/MaldivesExploration";


const Destinations = () => {
  return (
    <>
  <div className="sticky top-0 z-50 bg-gradient-to-t bg-blue-400 to-[#0081B0] pb-5 shadow-md">
  <Nav />
</div>
<div>
    <MaldivesExploration/>
    </div>
<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1350px]">
  
 
    <div className="w-full">
      <ListDestinations />
    </div>
    
</div>
<div className="border-t-3 border-gray-300"></div>
<div className="  my-16 md:my-[100px]">
  <SubscriptionComponent />
</div>

<div className="mt-16 md:mt-[100px]">
  <Footer />
</div>
    </>
  );
};

export default Destinations;
