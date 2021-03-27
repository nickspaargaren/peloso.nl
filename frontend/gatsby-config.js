module.exports = {
  siteMetadata: {
    title: "peloso.nl",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ozsvr5j0",
        dataset: "production",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
