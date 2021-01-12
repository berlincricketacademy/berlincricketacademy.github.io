import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="tile is-ancestor">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent tile is-4" key={post.id}>
              <article className="card blog-item-card shadow-dark">
                <div 
                  className="card-image"
                  style={{
                    backgroundImage: `url('${post.frontmatter.featuredimage.childImageSharp.fluid.src}')`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    borderRadius: '4px'
                  }}
                >
                  <figure className="image">
                    {/* <img 
                      src={post.frontmatter.featuredimage.childImageSharp.fluid.src}
                      alt={`featured image thumbnail for post ${post.frontmatter.title}`}
                      style={{
                        width: '100%',
                        height: '150px'
                      }}  
                    /> */}
                    {/* <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    /> */}
                  </figure>
                </div>
                <div className="card-content blog-item-card-content">
                  <div className="media">
                    <div className="media-content">
                      <Link
                        className="is-spaced has-text-white is-size-4 has-text-weight-semibold"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title.toUpperCase()}
                      </Link>
                      <span
                        className="subtitle is-size-5 is-block has-text-white"
                        style={{
                          display: 'inline-block',
                          marginTop: '1.5rem'
                        }}
                      >
                        {post.frontmatter.date}
                      </span>
                    </div>
                  </div>
                  <div className="content">
                    {post.frontmatter.description}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
