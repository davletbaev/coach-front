module.exports = {
  siteMetadata: {
    title: 'Ирина Вяткина',
    description: 'Бизнес-психолог, тренер личностного роста, мотивационный оратор',
    author: 'd8v.design',
    preview: '/preview.jpg'
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
        background_color: '#F5DCC5',
        theme_color: '#F5DCC5',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-gatsby-cloud',
  ],
};
