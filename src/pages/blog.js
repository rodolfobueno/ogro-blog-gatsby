import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { Col, Row } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

import "../styles/index.scss"

const Blog = () => (
  <Layout>
    <SEO title="All posts" />
    <div className="container justify-content-center text-center">
      <section>
        <h1>Blog</h1>
        <p>Aqui você entrará o melhor conteúdo sobre Sexo da internet.</p>
      </section>
      <hr />
      <StaticQuery
        query={PostsQuery}
        render={data => {
          return (
            <section>
              <div className="tm-section-title text-center pt-4">
                <Row>
                  {data.allStrapiArtigo.edges.map(({ node }) => {
                    return (
                      <Col md="4">
                        <Post
                          titulo={node.titulo}
                          autor={node.autor.username}
                          id={`/${node.id}`}
                          data={node.data}
                          resumo={node.resumo}
                          imgFluid={node.imagem.childImageSharp.fluid}
                        />
                      </Col>
                    )
                  })}
                </Row>
              </div>
            </section>
          )
        }}
      />
    </div>
  </Layout>
)

const PostsQuery = graphql`
  query {
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
              fluid(maxWidth: 400, maxHeight: 250, quality: 100) {
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
export default Blog
