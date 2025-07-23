import React from 'react'
import HeroSlider from '../src/components/HeroSlider'
import Wrapper from '../src/components/Wrapper'
import Section from '../src/components/Section'
import { productItem } from '../src/utils/bestsellingData'
import { newArrival } from '../src/utils/newArrival'
import Special from '../src/components/Special'
import About from '../src/components/About'
import Explore from '../src/components/Explore'

const Home = () => {
  return (
    <section>
      <HeroSlider />
      <Wrapper />
      <Section 
          title="Best Selling Product"
          bgColor={'black'}
          color={'white'}
          productItem={productItem}
      />
      <Section
        title="New Arrival Product"
        bgColor={'white'}
        color={'black'}
        productItem={newArrival}
      />
      <Special /> 
      <Explore />
    </section>
  )
}

export default Home
