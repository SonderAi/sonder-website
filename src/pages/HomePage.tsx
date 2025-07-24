import { useEffect } from 'react'
import { FeaturedProjects, FeaturesOverview, ServicesOverview, HeroSection, CTASection } from '../components/sections'

const HomePage = () => {
  // Add page title and description
  useEffect(() => {
    document.title = 'Sondry - Web Development Solutions for Your Business'
  }, [])

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Overview Section */}
      <ServicesOverview />
      
      {/* Featured Projects Section */}
      <FeaturedProjects className="bg-dark" />

      {/* Features Overview Section */}
      <FeaturesOverview />

      <CTASection />
    </>
  )
}

export default HomePage