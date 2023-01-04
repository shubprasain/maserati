module.exports = {
  siteMetadata: {
    title: "Maserati Showroom",
    description: "Maserati Showroom was found by Shubham Prasain in 2022. ",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options : {
        url:"http://maserati-showroom.local/graphql"
      }
    }
  ],
};