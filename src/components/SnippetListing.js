import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './PostsListing.module.scss'



const SnippetListing = ({ postEdges }) => {
    const getPostList = () => {
        const postList = []

        postEdges.forEach(postEdge => {
            postList.push({
                path: postEdge.node.fields.slug,
                tags: postEdge.node.frontmatter.tags,
                categories: postEdge.node.frontmatter.categories,
                title: postEdge.node.frontmatter.title,
                date: postEdge.node.fields.date,
                excerpt: postEdge.node.excerpt,
                timeToRead: postEdge.node.timeToRead,
                featuredImage: postEdge.node.frontmatter.featuredImage,
                expertise: postEdge.node.frontmatter.expertise
            })
        })
        return postList
    }
    const postList = getPostList()
    const ColorMap = { "beginner": "#8BC34A", "medium": "#fbc00e" }
    return (
        <div className={styles.articleList}>
            {/* Your post list here. */
                postList.map(post => (
                    <Link to={post.path} key={post.title}>
                        <article className={styles.articleBox}>
                            <div className={styles.right}>
                                <div className={styles.flex_display}>
                                    <Img fluid={post?.featuredImage?.childImageSharp?.fluid} alt="acounting image" className={styles.image} />
                                    <span className={styles.span} style={{ backgroundColor: ColorMap[post.expertise] }} />
                                    <div>
                                        <h3 className={styles.h3}>{post.title}</h3>

                                        <div className={styles.meta}>
                                            {post.date} &mdash; <span>{post.categories.join(' / ')}</span>{' '}
                &mdash; {post.timeToRead} Min Read{' '}
                                        </div>

                                    </div>
                                </div>

                                <p>{post.excerpt}</p>
                            </div>
                        </article>
                    </Link>
                ))}
        </div>
    )
}

export default SnippetListing
