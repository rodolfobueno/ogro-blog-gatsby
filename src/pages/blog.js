import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Col, Row } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const Blog = () => (
  <Layout>
    <SEO title="All posts" />
    <div className="container justify-content-center text-center">
      <StaticQuery
        query={PostsQuery}
        render={data => {
          return (
            <section>
              <div className="row">
                <div className="col-lg-9 col-md-12 col-12">
                  <Row>
                    {data.allStrapiArtigo.edges.map(({ node }) => {
                      return (
                        <Col md="6">
                          <Post
                            titulo={node.titulo}
                            autor={node.autor.username}
                            id={`/${node.url}`}
                            data={node.data}
                            resumo={node.resumo}
                            imgFluid={node.imagem.childImageSharp.fluid}
                          />
                        </Col>
                      )
                    })}
                  </Row>
                </div>
                <div className="col-lg-3 col-md-12 col-12">
                  <div className="col-12 justify-content-center">
                    <img
                      src={"../ogro-perfil.png"}
                      width="160"
                      height="160"
                      className="ogro-face"
                      alt="Imagem do ogro"
                    />
                    <br />
                    <p>
                      <strong>Ogro Selvagem</strong> <br />
                      O ogro que ensina ! <br />
                      <br />
                      Não importa o que você tem <br />
                      Mas o que faz com o que tem.
                    </p>
                    <ul className="social-links-list">
                      <li>
                        <a
                          href="http://instagram.com/ogroselvagem"
                          className="instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={"../instagram.png"}
                            alt="Logo do Istagram"
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/ogro.selvagem"
                          className="facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={"../facebook.png"} alt="Logo do Istagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 justify-content-center pt-5">
                    <h6>E-books gratuitos</h6>
                    <ul>
                      <li>
                        <a
                          href="http://oralneles.ogroselvagem.com.br?origem=site-ogro"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={"../ebook-oral-neles.png"}
                            width="200"
                            height="200"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
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
          url
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
