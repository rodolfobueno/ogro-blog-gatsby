import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Col, Row } from "reactstrap"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Post from "../components/Post"
import Profile from "../components/Profile"
import EbookList from "../components/EbookList"

const Home = () => (
  <Layout>
    <SEO title="Blog" />
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
                            tags={node.tags}
                          />
                        </Col>
                      )
                    })}
                  </Row>
                </div>
                <div className="col-lg-3 col-md-12 col-12  box-info-ogro">
                  <Profile />
                  <EbookList />
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
          tags {
            nome
          }
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

export default Home
