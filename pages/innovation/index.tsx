import InnovationBody from '@/components/innovation/InnovationBody'
import InnovationHero from '@/components/innovation/InnovationHero'
import Layout from '@/components/layout/Layout'
import TalkToUS from '@/components/layout/landing/TalkToUS'
import React from 'react'

export default function Innoavation() {
  return (
    <Layout>
        <InnovationHero/>
        <InnovationBody/>
        <TalkToUS/>
    </Layout>
  )
}
