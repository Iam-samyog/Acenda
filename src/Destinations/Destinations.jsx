import React from "react";
import Nav from "./Nav";
import SubscriptionComponent from "../components/SubscriptionComponent";
import Footer from "../Footer";
import ListDestinations from "./ListDestinations";
import SidebarCheckIn from "./SidebarCheckIn";
import CheckIn from "../components/CheckIn";

const Destinations = () => {
  return (
    <>
  <div className="sticky top-0 z-50 bg-gradient-to-b from-[#0081B0] to-[#00d6ff] to-[#006ab0] pb-5 shadow-md">
  <Nav />
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
