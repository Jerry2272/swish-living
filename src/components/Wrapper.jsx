import React from 'react';
import { serviceData } from '../utils/serviceData';

const Wrapper = () => {
  return (
    <section className="py-10 mb-[2em]  ">
      <div className="grid md:grid-cols-4 gap-6 px-4 md:px-[6em]">
        {serviceData.map((item, i) => (
          <div
            key={i}
            className="bg-black text-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-white text-white rounded-full text-2xl mb-4">
              {item.icon}
            </div>
            <h3 className="text-[20px] font-bold  mb-2">{item.title}</h3>
            <p className="text-sm  ">{item.descripture}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wrapper;
