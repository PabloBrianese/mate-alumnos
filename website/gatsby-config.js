module.exports = {
  pathPrefix: "/mate-alumnos",
  siteMetadata: {
    siteUrl: "https://pablobrianese.github.io/mate-alumnos",
    title: "mate-alumnos",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name:`email`,
        path: `${__dirname}/email`
      }
    }
  ],
};
