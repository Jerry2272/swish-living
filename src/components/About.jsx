import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">About Swish Bedding</h2>
        <p className="text-gray-600 text-lg">Redefining Comfort, One Room at a Time</p>
      </div>

      <div className="md:flex md:items-center md:gap-10">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="/images/about-swish.jpg" // Replace with actual image path
            alt="Swish Bedding Interior"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        <div className="md:w-1/2 text-gray-700 text-base leading-relaxed space-y-4">
          <p>
            At <span className="font-semibold">Swish Bedding</span>, we specialize in transforming living
            spaces into warm, stylish, and functional environments. Whether it's luxury beddings,
            custom curtains, or premium interior décor, our goal is to bring your dream home to life.
          </p>
          <p>
            With a strong commitment to quality and customer satisfaction, we provide not just
            products — but full-service solutions including fast delivery, professional installation,
            and tailored consultations.
          </p>
          <p>
            From individual homes to hospitality spaces, we are trusted by customers who desire a
            seamless blend of aesthetics, functionality, and lasting comfort.
          </p>
          <p className="font-semibold text-green-700">
            Swish Bedding — where style meets comfort.
          </p>
          <a
            href="/shop"
            className="inline-block mt-4 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Explore Our Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
