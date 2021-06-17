module.exports = {
  siteMetadata: {
    title: 'Patricia Anne Ilano',
    subTitle: 'Software Engineer',
    description:
      'Patricia Anne Ilano is a full stack software engineer who specializes in web and software applications.',
    author: 'Patricia Anne Ilano',
    siteUrl: 'https://ilanopat.github.io',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.md`, '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto mono', 'muli:400,4001,700,700i'],
        display: 'swap',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
}
