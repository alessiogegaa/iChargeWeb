import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '@blocks-helpers/useSiteMetadata'

const Seo = ({
  title,
  pageDescription,
  description,
  excerpt,
  meta,
  keywords,
  author,
  thumbnail,
  siteUrl
}) => {
  const site = useSiteMetadata()

  const social = (author && author.social) || site.social || []
  const youtube = social.find(s => s.name && s.name.toLowerCase() === 'youtube') || {};
const github = social.find(s => s.name && s.name.toLowerCase() === 'github') || {};
const linkedin = social.find(s => s.name && s.name.toLowerCase() === 'linkedin') || {};

description = pageDescription || excerpt || description || site.description;

  thumbnail = thumbnail && thumbnail.hero && thumbnail.hero.src
  const thumbnailUrl =
    thumbnail &&
    (thumbnail.startsWith('//')
      ? thumbnail
      : siteUrl && `${siteUrl}${thumbnail}`)

  /**
   * Meta Tags
   */

  const metaTags = [
    { itemprop: 'name', content: title || site.title },
    { itemprop: 'description', content: description },
    { name: 'description', content: description },

    { property: 'og:title', content: title || site.title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: site.name },
    { property: 'og:image', content: thumbnailUrl },

    /*{ name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: site.name },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: twitter.url }*/
     // YouTube
  { name: 'youtube:channel', content: youtube.url || '' },

  // GitHub
  { name: 'github:profile', content: github.url || '' },

  // LinkedIn
  { name: 'linkedin:profile', content: linkedin.url || '' },

  ]

  if (keywords && Array.isArray(keywords) && keywords.length > 0) {
    metaTags.push({ name: 'keywords', content: keywords.join(', ') });
  }

  if (meta) {
    metaTags.push(meta)
  }

  metaTags.push({ name: 'initial-scale', content: '1.0' })

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={metaTags}
    />
  )
}

export default Seo
