import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Social = ({ data }) => (
  <Layout>
    <Head pageTitle={data.socialJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.socialJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Social.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Social;

export const query = graphql`
  query SocialQuery {
    socialJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
