/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */
import heroBg from '../marketing/assets/hero.png'
export default {
  heroContainer: {
    '::before': {
      content: `" "`,
      size: `full`,
      position: `absolute`,
      top: `-10%`,
      left: 0,
      zIndex: -1,
      background: t =>
        `linear-gradient(
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.8)
        ), url(${heroBg}) no-repeat center 0`,
      backgroundSize: `100%, cover`
    }
  },
  
  featuresContainer: {
    position: `relative`,
    py: [5, 6],
    '::before': {
      position: `absolute`,
      content: `" "`,
      size: `full`,
      top: -3,
      right: 0,
      zIndex: -1,
      borderRadius: `xl`,
      background: `linear-gradient(
        180deg,
        #f7f9fe 0%,
        #6d7e78 100%
      )`,
    }
  },
  tabsContainer: {
    position: `relative`,
    py: [4, 5],
    '::before': {
      position: `absolute`,
      content: `" "`,
      size: `full`,
      top: 0,
      right: 0,
      zIndex: -1,
      borderRadius: `xl`,
      background: `linear-gradient(
        180deg,
        #f7f9fe 0%,
        #f4f4f8 100%
      )`
    }
  },
  testimonialsContainer: {
    position: `relative`,
    pt: 6,
    pb: 5,
    '::before': {
      position: `absolute`,
      content: `" "`,
      width: `full`,
      height: `full`,
      top: 0,
      right: 0,
      zIndex: -1,
      borderRadius: `xl`,
      background: `linear-gradient(
        180deg,
        #f7f9fe 0%,
        #f4f4f8 100%
      )`
    }
  }
}
