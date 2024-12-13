import React from 'react'
import HeroSection from '../components/homepage/HeroSection'
import Founder from '../components/homepage/Founder'
import Impact from '../components/homepage/Impact'
import Newsletter from '../components/homepage/Newsletter'
import Portfolio from '../components/homepage/PortfolioSection'
import ProgramsSection from '../components/homepage/ProgramsSection'
import CallToAction from '../components/homepage/CallToAction'

const HomePage: React.FC = () => {
  return (
    <div>
        <HeroSection />
        <Founder />
        <Impact />
        <Newsletter />
        <Portfolio />
        <ProgramsSection />
        <CallToAction />
    </div>
  )
}

export default HomePage