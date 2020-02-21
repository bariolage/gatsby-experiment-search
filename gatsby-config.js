module.exports = {
  siteMetadata: {
    title: `gatsby search`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        delimiter: ";",
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/search/*`] },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "pages",
        engine: "flexsearch",
        engineOptions: {
          tokenize: "forward",
        },
        query: `
          {
            allEwokBaseCsv {
              nodes {
                name
                id
                description
              }
            }
          }
        `,
        ref: "id",
        normalizer: ({ data }) =>
          data.allEwokBaseCsv.nodes.map(node => ({
            ...node,
          })),
      },
    },
  ],
}
