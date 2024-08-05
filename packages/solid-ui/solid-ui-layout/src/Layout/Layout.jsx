import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider, merge, Flex, Box, css } from 'theme-ui'
import baseTheme from '@solid-ui-theme'
import pageContextProvider from '@helpers/pageContextProvider'
import { FormContextProvider } from '@solid-ui-components/ContentForm'
import { ModalContextProvider } from '@solid-ui-components/Modal'
import { TabsContextProvider } from '@solid-ui-components/Tabs'
import ColorMode from '@solid-ui-components/ColorMode'
import { Helmet } from 'react-helmet'; 

const Layout = ({ children, pageContext = {}, location, theme = {} }) => {
  return (
    <ThemeProvider theme={merge(baseTheme, theme)}>
      <Helmet>
      <script type="text/javascript" id="zsiqchat">var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siq9f259ee8d693afdd5a7a2dec6b0e2f3c4ef134270b0355c636866043c274a28d", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.eu/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);</script>
      </Helmet>
      <pageContextProvider.Provider value={{ pageContext, location }}>
        <FormContextProvider>
          <ModalContextProvider>
            <TabsContextProvider>
              <Flex variant='layout.layout'>
                <Global styles={css(theme => theme.global)} />
                <ColorMode />
                <Box variant='layout.body'>{children}</Box>
              </Flex>
            </TabsContextProvider>
          </ModalContextProvider>
        </FormContextProvider>
      </pageContextProvider.Provider>
    </ThemeProvider>
  )
}

export default Layout
