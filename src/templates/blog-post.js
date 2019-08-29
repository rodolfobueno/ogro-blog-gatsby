import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.strapiArtigo
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.titulo} description={post.titulo} />
        <h1>{post.titulo}</h1>
        <Img fluid={post.imagem.childImageSharp.fluid} />
        <div dangerouslySetInnerHTML={{ __html: post.conteudo }} />
        <hr />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/${previous.id}`} rel="prev">
                ← {previous.titulo}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${next.id}`} rel="next">
                {next.titulo} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostTemplate($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    strapiArtigo(id: { eq: $id }) {
      titulo
      conteudo
      imagem {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      autor {
        id
        username
      }
    }
  }
`
