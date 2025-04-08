"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, MapPin, Users, Search } from "lucide-react"

const SidebarCheckIn = () => {
  // Form state
  const [location, setLocation] = useState("")
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate, setCheckOutDate] = useState("")
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 })

  // UI state
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false)
  const [isCheckInOpen, setIsCheckInOpen] = useState(false)
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false)
  const [isGuestsOpen, setIsGuestsOpen] = useState(false)

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  // Refs for handling outside clicks
  const locationRef = useRef(null)
  const checkInRef = useRef(null)
  const checkOutRef = useRef(null)
  const guestsRef = useRef(null)
  const formRef = useRef(null)

  // Sample locations
  const locations = [
    "Paris, France",
    "Bali, Indonesia",
    "Tokyo, Japan",
    "New York, USA",
    "Rome, Italy",
    "London, UK",
    "Barcelona, Spain",
    "Sydney, Australia",
    "Dubai, UAE",
    "Singapore",
  ]

  // Handle outside clicks to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsLocationDropdownOpen(false)
      }
      if (checkInRef.current && !checkInRef.current.contains(event.target)) {
        setIsCheckInOpen(false)
      }
      if (checkOutRef.current && !checkOutRef.current.contains(event.target)) {
        setIsCheckOutOpen(false)
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target)) {
        setIsGuestsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle location selection
  const handleLocationSelect = (loc) => {
    setLocation(loc)
    setIsLocationDropdownOpen(false)
  }

  // Handle date selection
  const handleDateChange = (date, type) => {
    if (type === "checkIn") {
      setCheckInDate(date)
      setIsCheckInOpen(false)
      // Automatically open checkout after selecting checkin
      setTimeout(() => setIsCheckOutOpen(true), 100)
    } else {
      setCheckOutDate(date)
      setIsCheckOutOpen(false)
    }
  }

  // Handle guest count changes
  const handleGuestChange = (type, operation) => {
    setGuests((prev) => {
      const updated = { ...prev }
      if (operation === "increase") {
        updated[type] += 1
      } else if (operation === "decrease" && updated[type] > 0) {
        updated[type] -= 1
      }
      return updated
    })
  }

  // Calculate total guests
  const totalGuests = guests.adults + guests.children + guests.infants

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (!location) {
      alert("Please select a location")
      return
    }

    if (!checkInDate) {
      alert("Please select a check-in date")
      return
    }

    if (!checkOutDate) {
      alert("Please select a check-out date")
      return
    }

    // Form is valid, proceed with submission
    console.log("Form submitted:", { location, checkInDate, checkOutDate, guests })

    // Here you would typically make an API call or redirect
    alert(`Search submitted for ${location} from ${checkInDate} to ${checkOutDate} with ${totalGuests} guests`)
  }

  // Calendar navigation
  const goToPreviousMonth = (e) => {
    e.stopPropagation()
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((prevYear) => prevYear - 1)
        return 11
      }
      return prev - 1
    })
  }

  const goToNextMonth = (e) => {
    e.stopPropagation()
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((prevYear) => prevYear + 1)
        return 0
      }
      return prev + 1
    })
  }

  // Helper function to generate calendar dates
  const generateCalendarDates = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()

    const calendar = []
    let dayCounter = 1

    for (let i = 0; i < 6; i++) {
      const week = []
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          week.push(null)
        } else {
          week.push(dayCounter)
          dayCounter++
        }
      }
      calendar.push(week)
      if (dayCounter > daysInMonth) break
    }

    return calendar
  }

  // Get current date info
  const today = new Date()
  const calendarDates = generateCalendarDates(currentMonth, currentYear)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // Format date for display
  const formatDateForDisplay = (day) => {
    if (!day) return null
    return `${monthNames[currentMonth].slice(0, 3)} ${day}, ${currentYear}`
  }

  // Check if a date is in the past
  const isDateInPast = (day) => {
    if (!day) return false
    const date = new Date(currentYear, currentMonth, day)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setIsLocationDropdownOpen(false)
    setIsCheckInOpen(false)
    setIsCheckOutOpen(false)
    setIsGuestsOpen(false)
  }

  return (
    <div
      className="w-full bg-cover bg-center min-h-[700px] md:min-h-[800px] lg:min-h-[900px]"
      style={{ backgroundImage: "url('/placeholder.svg?height=900&width=1600')" }}
    >
      <div className="w-full h-full bg-black bg-opacity-40 px-4 py-12 md:py-16 lg:py-24 flex flex-col items-center">
        {/* Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2">Find Your Stay</h2>
          <p className="text-lg md:text-xl text-white text-opacity-80">Book with Acenda today</p>
        </div>

        {/* Search Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-xl overflow-visible w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
        >
          {/* Location */}
          <div ref={locationRef} className="relative border-b border-gray-200">
            <button
              type="button"
              className="w-full p-4 md:p-5 flex items-center text-left"
              onClick={(e) => {
                e.stopPropagation()
                closeAllDropdowns()
                setIsLocationDropdownOpen(!isLocationDropdownOpen)
              }}
            >
              <div className="mr-4 text-gray-400">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-500">Location</div>
                <div className="text-base md:text-lg text-gray-800">{location || "Add destination"}</div>
              </div>
            </button>

            {isLocationDropdownOpen && (
              <div className="absolute left-0 right-0 bg-white shadow-lg z-30 max-h-60 overflow-y-auto rounded-b-lg">
                {locations.map((loc) => (
                  <div
                    key={loc}
                    className="px-6 py-3 hover:bg-blue-50 cursor-pointer text-base border-b border-gray-100 last:border-0"
                    onClick={() => handleLocationSelect(loc)}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Check-in Date */}
          <div ref={checkInRef} className="relative border-b border-gray-200">
            <button
              type="button"
              className="w-full p-4 md:p-5 flex items-center text-left"
              onClick={(e) => {
                e.stopPropagation()
                closeAllDropdowns()
                setIsCheckInOpen(!isCheckInOpen)
              }}
            >
              <div className="mr-4 text-gray-400">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-500">Check in</div>
                <div className="text-base md:text-lg text-gray-800">{checkInDate || "Add dates"}</div>
              </div>
            </button>

            {isCheckInOpen && (
              <div className="absolute left-0 right-0 bg-white shadow-lg z-30 p-4 max-h-96 overflow-y-auto rounded-b-lg">
                <div className="flex justify-between items-center mb-4">
                  <button type="button" onClick={goToPreviousMonth} className="p-2 hover:bg-gray-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="font-medium text-lg">
                    {monthNames[currentMonth]} {currentYear}
                  </div>
                  <button type="button" onClick={goToNextMonth} className="p-2 hover:bg-gray-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div key={day} className="text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}

                  {calendarDates.flat().map((day, index) => (
                    <div
                      key={index}
                      className={`
                        py-2 text-sm rounded-full w-9 h-9 flex items-center justify-center mx-auto
                        ${
                          day
                            ? isDateInPast(day)
                              ? "text-gray-300 cursor-not-allowed"
                              : "hover:bg-blue-100 cursor-pointer"
                            : ""
                        }
                        ${
                          day === today.getDate() &&
                          currentMonth === today.getMonth() &&
                          currentYear === today.getFullYear()
                            ? "bg-blue-500 text-white"
                            : ""
                        }
                      `}
                      onClick={() =>
                        day && !isDateInPast(day) && handleDateChange(formatDateForDisplay(day), "checkIn")
                      }
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Check-out Date */}
          <div ref={checkOutRef} className="relative border-b border-gray-200">
            <button
              type="button"
              className="w-full p-4 md:p-5 flex items-center text-left"
              onClick={(e) => {
                e.stopPropagation()
                closeAllDropdowns()
                setIsCheckOutOpen(!isCheckOutOpen)
              }}
            >
              <div className="mr-4 text-gray-400">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-500">Check out</div>
                <div className="text-base md:text-lg text-gray-800">{checkOutDate || "Add dates"}</div>
              </div>
            </button>

            {isCheckOutOpen && (
              <div className="absolute left-0 right-0 bg-white shadow-lg z-30 p-4 max-h-96 overflow-y-auto rounded-b-lg">
                <div className="flex justify-between items-center mb-4">
                  <button type="button" onClick={goToPreviousMonth} className="p-2 hover:bg-gray-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="font-medium text-lg">
                    {monthNames[currentMonth]} {currentYear}
                  </div>
                  <button type="button" onClick={goToNextMonth} className="p-2 hover:bg-gray-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div key={day} className="text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}

                  {calendarDates.flat().map((day, index) => {
                    // Parse check-in date if it exists
                    let checkInDay = null
                    let checkInMonth = null
                    let checkInYear = null

                    if (checkInDate) {
                      const parts = checkInDate.split(" ")
                      if (parts.length >= 3) {
                        checkInDay = Number.parseInt(parts[1].replace(",", ""))
                        const monthAbbr = parts[0]
                        checkInMonth = monthNames.findIndex((m) => m.slice(0, 3) === monthAbbr)
                        checkInYear = Number.parseInt(parts[2])
                      }
                    }

                    // Determine if this date is before check-in
                    const isBeforeCheckIn =
                      checkInDate &&
                      (currentYear < checkInYear ||
                        (currentYear === checkInYear &&
                          (currentMonth < checkInMonth || (currentMonth === checkInMonth && day < checkInDay))))

                    return (
                      <div
                        key={index}
                        className={`
                          py-2 text-sm rounded-full w-9 h-9 flex items-center justify-center mx-auto
                          ${
                            day
                              ? (isDateInPast(day) || isBeforeCheckIn)
                                ? "text-gray-300 cursor-not-allowed"
                                : "hover:bg-blue-100 cursor-pointer"
                              : ""
                          }
                          ${
                            day === today.getDate() &&
                            currentMonth === today.getMonth() &&
                            currentYear === today.getFullYear()
                              ? "bg-blue-500 text-white"
                              : ""
                          }
                        `}
                        onClick={() =>
                          day &&
                          !isDateInPast(day) &&
                          !isBeforeCheckIn &&
                          handleDateChange(formatDateForDisplay(day), "checkOut")
                        }
                      >
                        {day}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Guests */}
          <div ref={guestsRef} className="relative">
            <button
              type="button"
              className="w-full p-4 md:p-5 flex items-center text-left"
              onClick={(e) => {
                e.stopPropagation()
                closeAllDropdowns()
                setIsGuestsOpen(!isGuestsOpen)
              }}
            >
              <div className="mr-4 text-gray-400">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-500">Guests</div>
                <div className="text-base md:text-lg text-gray-800">
                  {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}` : "Add guests"}
                </div>
              </div>
            </button>

            {isGuestsOpen && (
              <div className="absolute left-0 right-0 bg-white shadow-lg z-30 p-4 max-h-80 overflow-y-auto rounded-b-lg">
                {["adults", "children", "infants"].map((type) => (
                  <div
                    key={type}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <div className="font-medium capitalize text-base">{type}</div>
                      <div className="text-sm text-gray-500">
                        {type === "adults" ? "Ages 13+" : type === "children" ? "Ages 2-12" : "Under 2"}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className={`w-8 h-8 md:w-9 md:h-9 rounded-full border border-gray-300 flex items-center justify-center ${
                          guests[type] === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-700"
                        }`}
                        onClick={() => handleGuestChange(type, "decrease")}
                        disabled={guests[type] === 0}
                      >
                        -
                      </button>
                      <span className="mx-3 w-6 text-center text-base">{guests[type]}</span>
                      <button
                        type="button"
                        className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
                        onClick={() => handleGuestChange(type, "increase")}
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
          <div className="p-4 md:p-5">
            <button
              type="submit"
              className="w-full py-3 md:py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg rounded-lg flex items-center justify-center transition-colors"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SidebarCheckIn