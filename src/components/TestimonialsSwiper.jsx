import { useState} from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSwiper() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const testimonials = [
    // First slide
    [
      {
        id: 1,
        name: "Sebastian",
        title: "Graphic design",
        image: "/img/Testimonials/Ellipse 7.png",
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
      },
      {
        id: 2,
        name: "Evangeline",
        title: "Model",
        image: "/img/Testimonials/Ellipse 7 (1).png",
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
      },
      {
        id: 3,
        name: "Alexander",
        title: "Software engineer",
        image: "/img/Testimonials/Ellipse 7 (2).png", 
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
      }
    ],
    // Second slide
    [
      {
        id: 4,
        name: "Jessica",
        title: "Product manager",
        image: "/img/Testimonials/Ellipse 7.png",
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
      },
      {
        id: 5,
        name: "Michael",
        title: "Marketing specialist",
        image: "/img/Testimonials/Ellipse 7 (1).png",
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
      },
      {
        id: 6,
        name: "Olivia",
        title: "UX designer",
        image: "/img/Testimonials/Ellipse 7 (2).png",
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
      }
    ],
    // Third slide
    [
      {
        id: 7,
        name: "William",
        title: "Data analyst",
        image: "/img/Testimonials/Ellipse 7 (1).png",
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
      },
      {
        id: 8,
        name: "Sophia",
        title: "Content creator",
        image: "/img/Testimonials/Ellipse 7 (1).png",
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
      },
      {
        id: 9,
        name: "Daniel",
        title: "Project coordinator",
        image: "/img/Testimonials/Ellipse 7 (1).png",
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
      }
    ]
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
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

  return (
    <div className="relative w-full   bg-cover bg-center overflow-hidden" >
        <img 
    src="/public/img/image 7 (1).png" 
    alt="Background" 
    className="absolute inset-0 w-full h-full object-cover" 
  />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.47)]	 "></div>
      <div className="relative container  mx-auto max-w-[1350px] px-4 py-16 z-10">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold text-white">Testimonials</h1>
          
          <div className="flex space-x-2">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((slide, slideIndex) => (
                <div key={slideIndex} className="min-w-full  flex flex-col md:flex-row gap-6">
                  {slide.map((testimonial) => (
                    <div key={testimonial.id} className="flex-1   border-4 bg-white rounded-[40px] p-6 shadow-lg "  data-aos='fade-left'>
                      <div className="flex items-center mb-4 ">
                        <div className="mr-4  ">
                        <div className=''>
                          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-black">
                            
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover " 
                            />
                          </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.title}</p>
                        </div>
                        <div className="flex ml-auto">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{testimonial.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}