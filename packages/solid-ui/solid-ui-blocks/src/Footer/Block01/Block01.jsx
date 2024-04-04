import React from 'react'
import { Link as GLink } from 'gatsby'
import { Container, Box, Flex } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  wrapper: {
    position: `relative`,
    bg: `black`
  },
  footer: {
    flexDirection: [`column-reverse`, `row`],
    justifyContent: `space-between`,
    alignItems: [`center`, `flex-start`],
    py: 5
  },
  logoContainer: {
    width: '200px',
    height: '60px',
  },
}

const FooterBlock01 = ({ content: { images, collection } }) => {
  return (
    <Box sx={styles.wrapper}>
      <Container px='4'>
        <Flex sx={styles.footer}>
          <Box sx={{ minWidth: 200 }}>
            <Box pb='1' mb='2' mt={[4, 0]}>
              <GLink to='/'>
                <ContentImages content={{ images }} imageEffect='fadeIn' sx={styles.logoContainer} /> {/* Apply the logo styles here */}
              </GLink>
            </Box>
            <Box pt='2' mb={[2, 4]} sx={{ color: 'white' }}>
              © {new Date().getFullYear()}  All right reserved.
            </Box>
            <Box>
              
            </Box>
          </Box>
          {collection?.map(
            ({ text, buttons }, index) =>
              buttons && (
                <Box key={`item-${index}`} mb='3'>
                  <ContentText
                    content={text?.[0]}
                    variant='h5'
                    sx={{ display: [`none`, `block`], color: 'white' }}
                  />
                  <ContentButtons
                    content={buttons}
                    variant='vertical'
                    wrapperStyles={{
                      flexDirection: [null, `column`],
                      flexWrap: `wrap`,
                      justifyContent: `center`
                    }}
                  />
                </Box>
              )
          )}
        </Flex>
      </Container>
    </Box>
  )
}

FooterBlock01.defaultProps = {
  menuJustify: `flex-end`
}

export default WithDefaultContent(FooterBlock01)