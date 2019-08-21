import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.strapiArtigo
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.titulo} description={post.titulo} />
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {post.titulo}
        </h1>
        <Img fluid={post.imagem.childImageSharp.fluid} />
        {/* <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >
          {post.frontmatter.date}
        </p> */}
        <div dangerouslySetInnerHTML={{ __html: post.conteudo }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        {/*  <Bio /> */}

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
