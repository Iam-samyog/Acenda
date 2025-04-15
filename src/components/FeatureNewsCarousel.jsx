import { useState} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeatureNewsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  const newsData = [
    // First slide (3 news items)
    [
      {
        id: 1,
        image: "/img/News/Rectangle 33.png",
        date: "February 20, 2024",
        title: "Delicious restaurant at Hanalei Bay",
        description: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem..."
      },
      {
        id: 2,
        image: "/img/News/Rectangle 33 (1).png",
        date: "February 20, 2024",
        title: "Top 10 most beautiful check-in spots in PH ...",
        description: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem..."
      },
      {
        id: 3,
        image: "/img/News/Rectangle 33 (2).png",
        date: "February 20, 2024",
        title: "Top 5 newest services at Navagio Beach",
        description: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem..."
      }
    ],
    // Second slide (3 news items)
    [
      {
        id: 4,
        image: "/img/News/Rectangle 33.png",
        date: "February 20, 2024",
        title: "Adventure guide to Bali's hidden gems",
        description: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem..."
      },
      {
        id: 5,
        image: "/img/News/Rectangle 33 (1).png",
        date: "February 20, 2024",
        title: "Best street food markets in Bangkok",
        description: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem..."
      },
      {
        id: 6,
        image: "/img/News/Rectangle 33 (2).png",
        date: "February 20, 2024",
        title: "Ultimate guide to Santorini sunsets",
        description: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem..."
      }
    ],
    // Third slide (3 news items)
    [
      {
        id: 7,
        image: "/img/News/Rectangle 33 (1).png",
        date: "February 20, 2024",
        title: "Hidden waterfalls of Costa Rica",
        description: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem..."
      },
      {
        id: 8,
        image: "/img/News/Rectangle 33.png",
        date: "February 20, 2024",
        title: "Top luxury resorts in the Maldives",
        description: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem..."
      },
      {
        id: 9,
        image: "/img/News/Rectangle 33 (2).png",
        date: "February 20, 2024",
        title: "Wildlife safari adventures in Kenya",
        description: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem..."
      }
    ]
  ];

  return (
    <div className="max-w-[1150px] mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold">Feature News</h2>
        <div className="flex space-x-2">
          <button 
            onClick={handlePrev}
            className="w-8 h-8 flex items-center  justify-center rounded-full border border-gray-300"
          >
            <ChevronLeft size={40} />
          </button>
          <button 
            onClick={handleNext}
            className="w-8 h-8 flex items-center  justify-center rounded-full border border-gray-300"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>

      <div 
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex transition-transform duration-300 ease-in-out " style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {newsData.map((slide, slideIndex) => (
            <div key={slideIndex} className=" h-ful min-w-full   flex flex-col sm:flex-row gap-4">
              {slide.map((news) => (
                <div key={news.id} className="bg-white  border-2 rounded-[32px]  shadow-lg overflow-hidden flex-1">
                  <img src={news.image} alt={news.title} className="w-full h-52 object-cover" />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-600">{news.date}</p>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{news.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{news.description}</p>
                    <button className="flex items-center gap-2 text-[#008395] ">
                      <svg className="w-5 h-5 border border-blue-500 rounded-full p-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span className="text-md  font-bold">See more</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {[0, 1, 2].map((dot) => (
          <button
            key={dot}
            onClick={() => setActiveSlide(dot)}
            className={`w-2 h-2 rounded-full ${activeSlide === dot ? 'bg-gray-800' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}



