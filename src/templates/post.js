import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { DiscussionEmbed } from "disqus-react"


import Layout from '../layout'
import Bio from '../components/Bio'
import PostTags from '../components/PostTags'
import SocialLinks from '../components/SocialLinks'

import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import styles from './post.module.scss'
import './prism-okaidia.css'

export default ({ data, pageContext }) => {


  const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  const date = postNode.fields.date
  if (!post.id) {
    post.id = slug

  }
  const disqusConfig = {
    shortname: "https-www-snipbits-dev",
    config: { identifier: post.id, title: post.title },
  }

  return (
    <Layout>
      <main>
        <Helmet>
          <title>{`${post.title}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <nav>
            <ul className={styles.pagination}>
              <li>
                <Link to={prevslug} rel="prev">
                  ← {prevtitle.slice(0, 30)}...
                </Link>
              </li>
              <li>
                <Link to={nextslug} rel="next">
                  {nexttitle.slice(0, 30)}... →
                </Link>
              </li>
            </ul>
          </nav>
          <h1>{post.title}</h1>
          <p className={styles.postMeta}>
            {date} &mdash; {postNode.timeToRead} Min Read{' '}
          </p>
          <div className={styles.postMeta}>
            <PostTags tags={post.tags} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />

          <hr />
          <Bio config={config} />
          <div className={styles.postMeta}>
            <SocialLinks postPath={slug} postNode={postNode} />

          </div>
        </div>
        <DiscussionEmbed {...disqusConfig} />
      </main>


    </Layout>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        categories
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
