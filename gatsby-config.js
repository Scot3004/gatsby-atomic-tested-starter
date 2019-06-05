module.exports = {
  siteMetadata: {
    title: 'Molecular starter'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {},
              showLineNumbers: true
            }
          }
        ]
      }
    }
  ]
};
