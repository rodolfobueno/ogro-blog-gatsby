import React from "react"
import { graphql } from "gatsby"

import { Col, Row } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/index.scss"
import Post from "../components/Post"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allStrapiArtigo.edges

    return (
      <Layout location={this.props.location}>
        <SEO title="All posts" />
        <Row>
          {posts.map(({ node }) => {
            return (
              <Col md="4">
                <Post
                  titulo={node.titulo}
                  autor={node.autor.username}
                  id={`/${node.id}`}
                  data={node.data}
                  conteudo={node.resumo}
                  imgFluid={node.imagem.childImageSharp.fluid}
                />
              </Col>
            )
          })}
        </Row>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allStrapiArtigo(sort: { fields: [data], order: DESC }) {
      edges {
        node {
          id
          titulo
          conteudo
          data(formatString: "DD/MM/YYYY")
          resumo
          imagem {
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 125) {
                ...GatsbyImageSharpFluid
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
