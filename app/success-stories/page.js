"use client"
import Navbar from '../Components/Navbar';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Hannah Schmitt',
    role: 'Fundraiser organizer',
    image: '/hannah-schmitt.jpg',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim lorem ipsum dolor sit amet.',
  },
  // Add more testimonials here if needed
];

export default function SuccessStories() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <Navbar />
      <main className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Success Stories</h2>
          <div className="mt-12 relative">
            <div className="flex justify-center">
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
              >
                &#8249;
              </button>
              <div className="max-w-3xl mx-auto text-center">
                <div className="bg-white p-6 shadow-lg rounded-lg relative">
                  <div className="flex justify-center">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
                  <p className="mt-4 text-gray-700">{testimonials[currentTestimonial].quote}</p>
                </div>
              </div>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
