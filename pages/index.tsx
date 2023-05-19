import React from 'react'
// import Layout from './components/layout/Layout'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/layout/landing/Hero'
import SuccessStory from '@/components/layout/landing/SuccessStory'
import Partnership from '@/components/layout/landing/Partnership'
import Accelerators from '@/components/layout/landing/Accelerators'
import Compliance from '@/components/layout/landing/Compliance'
import TalkToUS from '@/components/layout/landing/TalkToUS'

export default function index() {
  return (
    <Layout>
      <Hero/>
      <SuccessStory/>
      <Accelerators/>
      <Compliance/>
      <Partnership/>
      <TalkToUS/>
    </Layout>
  )
}
