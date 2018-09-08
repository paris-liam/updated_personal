module.exports = {
  siteMetadata: {
    title: 'Liam Paris',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Amaranth`,
          `Titillium Web`,
        ]
      }
    }],
}
