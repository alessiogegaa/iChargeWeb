import React, { useState, useRef, useEffect } from 'react';
import { Link as GLink } from 'gatsby';
import Sticky from 'react-sticky-el';
import { Container, Box, Flex, css } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Drawer from '@solid-ui-components/Drawer';
import ContentImages from '@solid-ui-components/ContentImages';
import ContentButtons from '@solid-ui-components/ContentButtons';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const styles = {
  wrapper: {
    position: `relative`,
    zIndex: 10,
    '.nav-container': {
      bg: `headerBg`,
      position: `fixed`,
      transition: `all 250ms ease-in`,
      py: 3,
      '.button-group-link.level-1' : {
        color:'white'
      },
      '@media screen and (max-width: 768px)': {
        '.button-group-link.level-1': {
          color: 'black' 
        }
      }
    },
    '.nav-sticky .nav-container': {
      bg: `headerActiveBg`,
      boxShadow: `0 0 25px rgba(140,152,164,.25)`,
      py: [3, null, 2],
      '.button-group-link.level-1, button-group-link.level-1:visited': {
        color: `headerActiveColor`
      }
    },
    '.button-group-button': {
      minWidth: 120,
      fontSize: 1,
      px: 3,
      py: 1
    }
  },
  header: {
    justifyContent: `space-between`,
    alignItems: `center`,
    height: [`6rem`, `7rem`], //prevent layout shift
  },
  logoContainer: {
    flexShrink: 0,
    mr: [null, null, 3, 5]
  },
  desktopMenu: {
    display: [`none`, null, `block`],
    minWidth: `auto`,
    flexGrow: 1
  },
  mobileMenu: {
    display: [`block`, null, `none`],
    
  }
};

const HeaderBlock02 = ({ content: { images, collection }, menuJustify }) => {
  const logoStyles = {
    width: '200px',
    height: '60px',
  };

  return (
    <>
      <Sticky
        enabled='true'
        stickyClassName='nav-sticky'
        css={css(styles.wrapper)}
      >
        <Container variant='full' className='nav-container'>
          <Container px='4'>
            <Flex sx={styles.header}>
              <Box sx={{ ...styles.logoContainer, ...logoStyles }}> 
                <GLink to='/'>
                  <ContentImages
                    content={{ images }}
                    sx={styles.image}
                    imageEffect='fadeIn'
                  />
                </GLink>
              </Box>
              {collection && (
                <>
                  <Box sx={styles.desktopMenu}>
                    <Reveal effect='fadeInDown'>
                      <Flex
                        sx={{
                          alignItems: `center`,
                          justifyContent: menuJustify
                        }}
                      >
                        {collection.map(
                          ({ buttons }, index) =>
                            buttons && (
                              <Box
                                key={`item-${index}`}
                                sx={{
                                  '& + &': {
                                    ml: 4,
                                  },
                                  
                                }}
                              >
                                <ContentButtons content={buttons}/>
                              </Box>
                            )
                        )}
                      </Flex>
                    </Reveal>
                  </Box>
                  <Box sx={styles.mobileMenu}>
                    <Drawer buttonStyle={{ svg: { size: 32 ,color:'#22c55e'} }} >
                      {collection.map(
                        ({ buttons }, index) =>
                          buttons && (
                            <Box
                              key={`item-${index}`}
                              sx={{
                                fontSize: 3,
                                '.button-group-link.level-1, button-group-link.level-1:visited': {
                                  color: `headerActiveColor`,
                                }
                              }}
                            >
                              <ContentButtons
                                content={buttons}
                                variant='vertical'
                              />
                            </Box>
                          )
                      )}
                    </Drawer>
                  </Box>
                </>
              )}
            </Flex>
          </Container>
        </Container>
      </Sticky>
    </>
  );
};

HeaderBlock02.defaultProps = {
  menuJustify: `flex-end`
};

export default WithDefaultContent(HeaderBlock02);
