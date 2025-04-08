import React from 'react'
import Nav from './Nav'
import SubscriptionComponent from '../components/SubscriptionComponent'
import Footer from '../Footer'

const Destinations = () => {
  return (
    <>

    <div className="sticky top-0 z-50 bg-white pb-5 shadow-md">
      <Nav/>
      </div>
      <div className='my-[100px]'>
      <SubscriptionComponent/>
      </div>
      <div className='mt-[100px]'><Footer/></div>

      

    </>
  )
}

export default Destinations
