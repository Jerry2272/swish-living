import React from 'react'
import { testimonial } from '../utils/testimonialData'

const TestimonialCard = () => {
  return (
    <section className="py-16  px-4 md:px-[4em]" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          What Our Clients Say
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonial.map((item) => (
            <div
              key={item.id}
              className="bg-black p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-30 h-30 rounded-full mx-auto mb-6 object-cover ring-4 ring-white"
              />
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-white mb-2">{item.location}</p>

              <div className="text-yellow-400 text-lg">{item.star}</div>

              <p className="text-gray-400 italic mt-4 leading-relaxed">
                “{item.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialCard
