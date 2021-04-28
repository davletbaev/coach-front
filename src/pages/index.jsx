import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import About from '~modules/About';
import Blockquote from '~modules/Blockquote';
import Coaching from '~modules/Coaching';
import Cover from '~modules/Cover';
import Decision from '~modules/Decision';
import Factoid from '~modules/Factoid';
import Guarantees from '~modules/Guarantees';
import LeadForm from '~modules/LeadForm';
import Reviews from '~modules/Reviews';
import Session from '~modules/Session';
import Statistics from '~modules/Statistics';

import Seo from '~components/Seo';

import '~assets/styles/global.css';

const IndexPage = ({ data }) => (
  <>
    <Seo title="Home" />
    <Cover />
    <About />
    <Decision />
    <Factoid />
    <Statistics />
    <Blockquote />
    <Reviews reviews={ data.allWpReview.nodes } />
    <Coaching products={ data.allWpProduct.nodes } />
    <Guarantees />
    <Session />
    <LeadForm />
  </>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWpReview: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        reviewData: PropTypes.shape({
          description: PropTypes.string.isRequired,
          video: PropTypes.string,
          // eslint-disable-next-line react/forbid-prop-types
          photo: PropTypes.object,
        }),
      })),
    }).isRequired,
    allWpProduct: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        productData: PropTypes.shape({
          duration: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        }).isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
 query Reviews {
  allWpReview {
    nodes {
      reviewData {
        description
        video
        photo {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 480
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
                quality: 85
              )
            }
          }
        }
      }
      title
      id
    }
  }
  allWpProduct(sort: {fields: [productData___order]}) {
    nodes {
      id
      title
      productData {
        duration
        price
        order
      }
    }
  }
}
`;

export default IndexPage;
