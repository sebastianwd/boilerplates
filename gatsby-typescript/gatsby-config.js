const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@sebastianwd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sebastian Luque - Portafolio`,
        short_name: `Sebastian L. - Portafolio`,
        start_url: `/`,
        background_color: `#17171A`,
        theme_color: `#00fff5`,
        display: `minimal-ui`,
        icon: `src/images/site-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@context': path.resolve(__dirname, 'src/context'),
          '@theme': path.resolve(__dirname, 'src/theme'),
          '@generated': path.resolve(__dirname, 'src/__generated__'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
        extensions: ['js', 'tsx', 'ts', 'jsx'],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.tsx`),
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter\:300,400,700`, `Open Sans\:400`],
        display: 'swap',
      },
    },
  ],
}
