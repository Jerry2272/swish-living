import React from 'react'
import { serviceData } from '../utils/serviceData'

const Wrapper = () => {
  return (
    <section>
        <div className="div grid md:grid-cols-4 md:gap-6 gap-2 md:h-[40vh] md:p-[4em] p-[2em] my-[2em]">
            {serviceData.map((item , i) => (
                <div key={i} className="bg-black text-white h-auto p-[2em]" 
                style={{
                    borderTopRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                }}
                >
                    <span>{item.icon}</span>
                    <h2 className='text-[22px] py-2 font-bold'>{item.title}</h2>
                    <p>{item.descripture}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Wrapper
