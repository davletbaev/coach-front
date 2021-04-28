import Layout from './src/components/Layout';

const React = require('react');
const PropTypes = require('prop-types');

export const wrapPageElement = ({ element }) => {
  return (
    <Layout>
      { element }
    </Layout>
  );
};

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
};
