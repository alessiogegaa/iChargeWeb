import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block02'
import Tabs from '@solid-ui-components/Tabs'
import Hero from '@solid-ui-blocks/Hero/Block02'
import Stats from '@solid-ui-blocks/Stats/Block01'
import Features from '@solid-ui-blocks/Features/Block06'
import HowItWorks from '@solid-ui-blocks/FeaturesWithPhoto/Block04'
import FeatureTabOne from '@solid-ui-blocks/FeaturesWithPhoto/Block05'
import FeatureTabTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import FeatureTabThree from '@solid-ui-blocks/FeaturesWithPhoto/Block07'
import Testimonials from '@solid-ui-blocks/Testimonials/Block03'
import Companies from '@solid-ui-blocks/Companies/Block01'
import Faq from '@solid-ui-blocks/Faq/Block01'
import Pricing from '@solid-ui-blocks/Pricing/Block02'
import Blog from '@solid-ui-blocks/Blog/Block01'
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
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero content={content['hero']} />
      </Container>
      <Divider space='6' />
      <Container variant='wide' sx={styles.featuresContainer}>
        <Divider space={-6} />
        <Stats content={content['stats']} />
        <Divider space='4' />
        <Features content={content['features']} />
      </Container>
      <Divider space='5' />
      <ContentTwo content={content['solutions']} />
      <Divider space='5' />
      <HowItWorks content={content['how-it-works']} />
      <Divider space='5' />
     {/* <Divider space='5' />
      <Container variant='wide' sx={styles.tabsContainer}>
        <Tabs space={4} variant='pill'>
          <FeatureTabOne content={content['feature-tab-one']} />
          <FeatureTabTwo content={content['feature-tab-two']} reverse />
          <FeatureTabThree content={content['feature-tab-three']} />
        </Tabs>
  </Container>*/}
      <Divider space='4' />
      <Faq content={content['faq']} />
      {/*<Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.testimonialsContainer}>
        <Testimonials content={content['testimonials']} />
        <Divider space='5' color='omegaLight' />
        <Companies content={content['companies']} />
</Container>*/}
      <Divider space='5' />
      <Divider space='5' />
      <Pricing content={content['pricing']} />
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