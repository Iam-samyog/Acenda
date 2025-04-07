import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // Optional: clean icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navitems = ['Home', 'Destinations', 'Blog', 'News', 'Contact']

  return (
    <nav className="text-white">
      <div className="container mx-auto max-w-[1100px] px-4">
        <div className="flex justify-between pt-6 items-center">
          {/* Logo */}
          <Link to="/">
            <h1 className="font-bold text-[28px]">Acenda</h1>
          </Link>

          {/* Desktop nav items */}
          <div className="hidden md:flex gap-[60px]">
            {navitems.map((nav, index) => (
              <Link key={index} to={`/${nav.toLowerCase()}`} className="hover:font-semibold">
                {nav}
              </Link>
            ))}
          </div>

          {/* Mobile burger menu icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 bg-white border text-black bg-opacity-80 p-4 rounded-lg">
            {navitems.map((nav, index) => (
              <Link
                key={index}
                to={`/${nav.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:font-semibold"
              >
                {nav}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
