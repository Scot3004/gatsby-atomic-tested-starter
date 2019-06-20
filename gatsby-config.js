module.exports = {
  siteMetadata: {
    title: 'Molecular starter',
    menuLinks: [
      {
        name: 'home',
        link: '/',
        icon: 'home'
      },
      {
        name: 'blog',
        link: '/blog',
        icon: 'message-square'
      }
    ]
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
