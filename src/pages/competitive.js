import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Competitive = ({ data }) => (
  <Layout>
    <Head pageTitle={data.competitiveJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.competitiveJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Competitive.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Competitive;

export const query = graphql`
  query CompetitiveQuery {
    competitiveJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
