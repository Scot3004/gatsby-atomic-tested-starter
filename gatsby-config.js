module.exports = {
  siteMetadata: {
    title: 'Molecular starter',
    logo: '/gatsby.svg',
    menuLinks: [
      {
        name: 'home',
        link: '/',
        icon: 'home',
        partiallyActive: false
      },
      {
        name: 'blog',
        link: '/blog',
        icon: 'message-square',
        partiallyActive: true
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
