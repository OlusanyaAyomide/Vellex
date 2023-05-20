import CapitalHero from '@/components/capital/CapitalHero'
import CapitalInvestment from '@/components/capital/CapitalInvestment'
import Layout from '@/components/layout/Layout'
import TalkToUS from '@/components/layout/landing/TalkToUS'
import React from 'react'

export default function Capital() {
  return (
    <Layout>
        <CapitalHero/>
        <CapitalInvestment/>
        <TalkToUS/>
    </Layout>
  )
}
