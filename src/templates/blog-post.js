import React from "react"
import { Link, graphql } from "gatsby"
import Reactmarkdown from "react-markdown"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostTag from "../components/PostTag"


import "../styles/index.scss"

const BlogPostTemplate = props => {
  const { previous, next } = props.pageContext
  const post = props.data.strapiArtigo
  return (
    <Layout>
      <SEO title={post.tituloseo} description={post.tituloseo} />
      <div className="blog-post container">
        <Link to="/" rel="back">
          ← Voltar para listagem
        </Link>
        <div className="header-info pt-4">
          {post.data}
        </div>
        <PostTag tags={post.tags} className="pt-3" />
        <div className="py-2">
          <h1>{post.titulo}</h1>
        </div>
        <div className="py-3">
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

        <ul className="nextpreview">
          {previous && (
            <Link to={`/${previous.url}`} rel="prev">
              <li>← {previous.titulo}</li>
            </Link>
          )}
          {next && (
            <Link to={`/${next.url}`} rel="next">
              <li>{next.titulo} →</li>
            </Link>
          )}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostTemplate($id: String!) {
    strapiArtigo(id: { eq: $id }) {
      titulo
      tituloseo
      conteudo
      tags {
        nome
      }
      data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      autor {
        id
        username
      }
    }
  }
`
export default BlogPostTemplate

/* imagem {
  childImageSharp {
    fluid(maxWidth: 1080, maxHeight: 350, quality: 100) {
      ...GatsbyImageSharpFluid
    }
  }
} */
