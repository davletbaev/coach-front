import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

function Seo({
  description,
  lang,
  meta,
  title,
}) {
  const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            preview
          }
        }
      }
    `);

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={
        {
          lang,
        }
      }
      title={ metaTitle }
      titleTemplate={ `%s | ${ metaDescription }` }
      meta={
        [
          {
            name: 'description',
            content: metaDescription,
          },
          {
            property: 'og:title',
            content: metaTitle,
          },
          {
            property: 'og:description',
            content: metaDescription,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:image',
            content: site.siteMetadata.preview
          },
          {
            property: 'og:image:url',
            content: site.siteMetadata.preview
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            name: 'twitter:creator',
            content: site.siteMetadata?.author || '',
          },
          {
            name: 'twitter:title',
            content: metaTitle,
          },
          {
            name: 'twitter:description',
            content: metaDescription,
          },
          {
            name: 'twitter:image',
            content: site.siteMetadata.preview
          }
        ].concat(meta)
      }
      link={
        [
          {
            rel: 'preload',
            as: 'font',
            href: '/fonts/PlayfairDisplay-Bold.woff2',
            type: 'font/woff2',
          },
          {
            rel: 'preload',
            as: 'font',
            href: '/fonts/PlayfairDisplay-Italic.woff2',
            type: 'font/woff2',
          },
          {
            rel: 'preload',
            as: 'font',
            href: '/fonts/OpenSans-Regular.woff2',
            type: 'font/woff2',
          },
          {
            rel: 'preload',
            as: 'font',
            href: '/fonts/OpenSans-Bold.woff2',
            type: 'font/woff2',
          },
        ]
      }
    />
  );
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
