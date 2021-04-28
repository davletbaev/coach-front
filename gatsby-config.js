module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          'https://davletbaev.space/graphql',
        schema: {
          typePrefix: 'Wp',
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: [ 'smoothscroll' ],
      },
    },
    {
      resolve: 'gatsby-plugin-minify-classnames',
      options: {
        dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
        enableOnDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [ 'Yeseva One', 'Helvetica Neue' ],
          urls: [ '/fonts/fonts.css' ],
        },
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${ __dirname }/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#639',
        theme_color: '#639',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-gatsby-cloud',
  ],
};
