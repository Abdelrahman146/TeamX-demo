

module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-svg-sprite`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-cms`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
    ],
  };
  
  