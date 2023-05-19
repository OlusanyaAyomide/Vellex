import React from 'react'
import Layout from '@/components/layout/Layout'
import AboutHero from '@/components/about/AboutHero'
import SuccessStory from '@/components/layout/landing/SuccessStory'
import MeetTeam from '@/components/about/MeetTeam'
import { AboutText } from '@/utils/constants'

export default function About() {
  return (
  <Layout>
    <AboutHero heroText='We make the complex, simple' Content={AboutText}/>
    <SuccessStory/>
    <MeetTeam/>
  </Layout>
  )
}
