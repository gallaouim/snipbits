import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import CookieConsent from "react-cookie-consent";

import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
const Index = ({ data }) => (

  <Layout>
    <div style={{ display: "flex" }}>
      <main>
        <Helmet title={"Useful Code Snippets and Blog Posts about Development"} />
        <SEO />
        <PostListing postEdges={data.allMarkdownRemark.edges} />
      </main>
    </div>
    <CookieConsent
      location="bottom"
      buttonText="Sure"
      cookieName="Cookies"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
    </CookieConsent>
  </Layout >
)

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            
            date
            expertise
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 630) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            categories
          }
        }
      }
    }
  }
`
