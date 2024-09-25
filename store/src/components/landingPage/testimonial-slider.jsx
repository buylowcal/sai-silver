// src/components/TestimonialSlider.jsx
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
  {
    image: '/client1.webp',
    name: 'Alice Chandel',
    comment: 'Absolutely stunning jewelry! The craftsmanship is top-notch.',
  },
  {
    image: '/client2.webp',
    name: 'Raudhi Hyiyat',  
    comment: 'I purchased an engagement ring, and my fiancée loved it!',
  },
  {
    image: '/client3.svg',
    name: 'Sophi Patel',
    comment: 'Great customer service and beautiful designs. Highly recommend!',
  },
 ];

 const TestimonialSlider = () => {
    const [sliderRef] = useKeenSlider({
      loop: true,
      vertical: true,       // Enable vertical sliding
      slidesPerView: 3,     // Show 3 slides at a time
      spacing: 15,          // Spacing between slides
      mode: 'snap',
    });
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto p-4 ">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            What Our Customers Say
          </h2>
          <div ref={sliderRef} className="keen-slider h-[650px] m-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="keen-slider__slide flex mx-4 border-2 border-gray-300  flex-col items-center bg-white rounded-lg shadow-xl flex-1"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 mt-2 text-center italic p-2 mb-5">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialSlider;
