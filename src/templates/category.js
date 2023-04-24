import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'


const CategoryTemplate = ({ data, pageContext }) => (
  <Layout>
    <main>
      <Helmet title={pageContext.category} />
      <h1>
        Category:
        {pageContext.category}
      </h1>
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </main>
  </Layout>
)

export default CategoryTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
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
            expertise
            tags
            
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 48) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
            categories
          }
        }
      }
    }
  }
`
