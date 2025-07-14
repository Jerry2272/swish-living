import React from 'react'
import HeroSlider from '../src/components/HeroSlider'
import Wrapper from '../src/components/Wrapper'
import Section from '../src/components/Section'
import { productItem } from '../src/utils/bestsellingData'

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
    </section>
  )
}

export default Home
