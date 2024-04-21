import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import Header from '@solid-ui-blocks/Header/Block02'
import Team from '@solid-ui-blocks/Hero/Block03'
import Hero from '@solid-ui-blocks/Hero/Block04'
import Stats from '@solid-ui-blocks/Stats/Block01'
import Features from '@solid-ui-blocks/Features/Block06'
import HowItWorks from '@solid-ui-blocks/FeaturesWithPhoto/Block07'
import ServicesDetails from '@solid-ui-blocks/Faq/Block02'
import Faq from '@solid-ui-blocks/Faq/Block01'
import ContentTwo from '@solid-ui-blocks/Features/Block06'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from '../homepage/app/_styles';
import theme from '../homepage/app/_theme';

const HomePage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)
  
  return (
    <Layout theme={theme} {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalWithTabs content={content['contact']} />
      {/* Blocks */}
      <Header content={content['header']} />
        <Hero content={content['hero']} />
      <Divider space='4' />
      <Stats content={content['stats']} />
      <Divider space='4' />
      <Container variant='wide' sx={styles.featuresContainer}>
        <Divider space={-6} />
        <Features content={content['features']} />
      </Container>
      <Divider space='5' />
      <h1 style={{textAlign:'center', color:'#2d3748'}}>Kush Mund të Përfitojë?</h1>
      <ServicesDetails content={content['services-details']} />
      <Divider space='5' />
      <ContentTwo content={content['solutions']} />
      <Divider space='5' />
      <Team content={content['team']} />
      <Divider space='5'/>
      <HowItWorks content={content['how-it-works']} />
      <Divider space='5' />
      <Divider space='4' />
      <Faq content={content['faq']} />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query homepageAppBlockContent {
    allBlockContent(filter: { page: { in: ["homepage/app", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default HomePage