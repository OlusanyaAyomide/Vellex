import AboutHero from '@/components/about/AboutHero'
import Layout from '@/components/layout/Layout'
import AcceleratorService from '@/components/services/AcceleratorService'
import Compliance from '@/components/services/Compliance'
import { ServiceHeroContent, ServiceHeroText } from '@/utils/constants'
import React from 'react'

export default function Services() {
  return (
    <Layout>
      <AboutHero heroText={ServiceHeroText} Content={ServiceHeroContent}/>
      <AcceleratorService/>
      <Compliance/>
    </Layout>
  )
}
