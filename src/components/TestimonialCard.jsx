import React from 'react'
import { testimonial } from '../utils/testimonialData'

const TestimonialCard = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-[4em]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonial.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md text-center transition-transform hover:scale-105 duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-black">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.location}</p>
              <div className="text-yellow-500 my-2 text-xl">{item.star}</div>
              <p className="text-gray-600 italic mt-2">{item.text}</p>
              <div className="text-yellow-500 my-2 text-xl">{item.star}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialCard
