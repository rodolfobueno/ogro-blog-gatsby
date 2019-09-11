module.exports = {
  siteMetadata: {
    title: `Ogro Selvagem - Desmistificador do Sexo`,
    author: `Ogro Selvagem`,
    description: `Site do Ogro Selvagem. O deterntor do guia do Sexo. Por um mundo com mais sexo e orgasmos.`,
    siteUrl: `https://www.ogroselvagem.com.br/`,
    social: {
      instagram: `ogroselvagem`,
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://ogro-cms-strapi.herokuapp.com"
          : "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "artigo",
          "user",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Site do Ogro Selvagem`,
        short_name: `Ogro - Website`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4d8c67`,
        display: `minimal-ui`,
        icon: `content/assets/icon-pwa.png`,
      },
    },
  ],
}
