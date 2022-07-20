import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'peloso.nl',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ozsvr5j0',
        dataset: 'production',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
  ],
};

export default config;
