import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-6 md:px-[4em]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Get in Touch</h2>
          <p className="mb-6 text-lg text-gray-700">
            We'd love to hear from you! Whether you’re interested in our bedding collections, interior services, or i nstallations — we’re just a message away.
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-semibold">📍 Address:</p>
              <p>Swishliving 66 Okporo road, 2nd plaza after liquid bulk fuel station off artillery.</p>
            </div>
            <div>
              <p className="font-semibold">📞 Phone:</p>
              <p>+234 810 048 9780</p>
            </div>
            <div>
              <p className="font-semibold">📧 Email:</p>
              <p>swishbeddings@gmail.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <p className="font-semibold mb-2">Follow us:</p>
            <div className="flex gap-4 text-green-700 text-xl">
              <a
                    href="https://www.facebook.com/share/1JUCSfLHUH/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/swish_livinginteriors?igsh=NnhlcGJqNGVoN3g2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.instagram.com/swishliving_?igsh=bzJvZnB0aXM5dmls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.tiktok.com/@swishliving_?_t=ZM-8yGi6loqyHA&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-800"
                  >
                    <FaTiktok />
                  </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-80 md:h-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Swish Bedding Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31803.34886113788!2d7.018819748625738!3d4.869324173599205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d3d12d54e5bd%3A0x11a2fead9621c91!2sSwishliving!5e0!3m2!1sen!2sng!4v1753294146894!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
