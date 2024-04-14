import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ListItem from '@solid-ui-components/ListItem'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const FaqBlock02 = ({ content: { text, collection } }) => (
  <Container as={Reveal}>
    <Box sx={{ textAlign: `center` }}>
      <ContentText content={text} />
    </Box>
    {text && collection && <Divider />}
    <Flex sx={{ flexWrap: `wrap`, justifyContent: 'space-between' }}>
      {collection?.map(({ container, ...props }, index) => (
        <Box key={`item-${index}`} sx={{ width: ['100%', 'calc(50% - 32px)'], mb: [3, 0] }}>
          <ContentContainer content={container} p='4'>
            <ListItemWrapper {...props} />
          </ContentContainer>
        </Box>
      ))}
    </Flex>
  </Container>
)

const ListItemWrapper = ({ middle, iconProps, ...rest }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <ListItem {...rest} middle={middle} iconProps={{ ...iconProps, mr: 2 }} />
  </Box>
);

export default WithDefaultContent(FaqBlock02)

