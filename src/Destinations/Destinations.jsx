import React from "react";
import Nav from "./Nav";
import SubscriptionComponent from "../components/SubscriptionComponent";
import Footer from "../Footer";
import ListDestinations from "./ListDestinations";

const Destinations = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-gradient-to-r from-[#0081B0] to-[#01719B]  pb-5 shadow-md">
        <Nav /></div>
        <div className="container mx-auto max-w-[1350px]">
          <div className="flex flex-wrap justify-between items-center">
            <div className=""></div>
            <div className="">
              <ListDestinations />
            </div>
          </div>
        </div>
      
      
      <div className="my-[100px]">
          <SubscriptionComponent />
        </div>
        <div className="mt-[100px]">
          <Footer />
        </div>
    </>
  );
};

export default Destinations;
