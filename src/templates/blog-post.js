import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Reactmarkdown from "react-markdown"

const BlogPostTemplate = props => {
  const { previous, next } = props.pageContext
  const post = props.data.strapiArtigo
  return (
    <Layout>
      <SEO title={post.titulo} description={post.titulo} />
      <div class="container justify-content-center">
        <section>
          <h1>{post.titulo}</h1>
        </section>
        <hr />
        {/* <Img fluid={post.imagem.childImageSharp.fluid} /> */}
        <div className="pt-5 pb-3">
          <Reactmarkdown
            source={post.conteudo}
            transformImageUri={uri =>
              uri.startsWith("http")
                ? uri
                : `${process.env.IMAGE_BASE_URL}${uri}`
            }
            className="conteudo-artigo"
            escapeHtml={false}
          />
        </div>
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
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostTemplate($id: String!) {
    strapiArtigo(id: { eq: $id }) {
      titulo
      conteudo
      imagem {
        childImageSharp {
          fluid(maxWidth: 1080, maxHeight: 350, quality: 100) {
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
export default BlogPostTemplate
