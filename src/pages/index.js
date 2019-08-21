import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allStrapiArtigo.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          /* const title = node.titulo || node.fields.slug */
          return (
            <div key={node.id}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={`/${node.id}`}>
                  {node.titulo}
                </Link>
              </h3>
              <Img fixed={node.imagem.childImageSharp.fixed} />
              {/* <small>{node.frontmatter.date}</small> */}
              <p
                dangerouslySetInnerHTML={{
                  __html: node.conteudo,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allStrapiArtigo {
      edges {
        node {
          id
          titulo
          conteudo
          imagem {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          autor {
            username
          }
        }
      }
    }
  }
`
