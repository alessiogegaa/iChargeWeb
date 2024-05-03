module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Icharge',
        short_name: 'iCharge',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#5a67d8',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png'
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-FWJWQ58R1Y", 
        ],
        pluginConfig: {
          head: true
        },
      },
    }
  ],
  siteMetadata: {
    title: 'iCharge',
    name: 'iCharge',
    description: 'Charge smart. Go far!'
  }
}
