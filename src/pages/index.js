import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery, Link } from "gatsby"
import { Col, Row } from "reactstrap"
import Post from "../components/post"
import { Button } from "reactstrap"

const Home = () => (
  <Layout>
    <SEO title="Ogro selvagem - Desmistificação do prazer. Para eles e elas." />
    <div className="justify-content-center box-index">
      <section>
        <div className="container justify-content-center col-lg-6">
          <div className="tm-section-title text-center pb-4">
            <img
              src={"../ogro-perfil.png"}
              width="160"
              height="160"
              className="ogro-face"
              alt="Imagem do ogro"
            />
            <br />
            <h3>Olá, seja bem vindo ao covil do Ogro Selvagem!</h3>
            <p className="pt-3">
              Lugar onde a teoria e a prática do <strong>sexo</strong> se
              encontram em harmonia.
            </p>
            <p>
              <strong>Confie</strong> e siga o guia. Aqui você irá{" "}
              <strong>aprender</strong> mais sobre as verdades e mitos do{" "}
              <strong>sexo</strong>, sobre os seus mistérios e, claro, como dar
              mais <strong>prazer</strong> aos seus companheiro(a)s.
            </p>
            <p>
              O <strong>ogro</strong> foi criado para que pessoas possam{" "}
              <strong>usufruir</strong> de tudo que eu aprendi, sem precisar
              passar por tudo que já passei. Por um mundo com mais{" "}
              <strong>prazer</strong> e mais <strong>orgasmos</strong>.
            </p>
            <p>
              <Link to="/historia">
                <Button color="link">
                  Clique aqui e conheça a história do Ogro
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ebooks-call mt-4">
        <p>
          Disponibilizei um e-book <strong>gratuito</strong> para você se tornar
          um expert no assunto: ORAL NELES.
          <br />
          Realize o donwload agora mesmo.
        </p>
        <br />
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
      </section>
      <section className="pt-5">
        <div className="container justify-content-center">
          <div className="tm-section-title text-center pb-4">
            <h3>Últimos posts no Blog</h3>
          </div>
          <StaticQuery
            query={PostsQuery}
            render={data => {
              return (
                <Row className="justify-content-center">
                  {data.allStrapiArtigo.edges.map(({ node }) => {
                    return (
                      <Col sm="4">
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
              )
            }}
          />
        </div>
      </section>
    </div>
  </Layout>
)

const PostsQuery = graphql`
  query {
    allStrapiArtigo(sort: { fields: [data], order: DESC }, limit: 2) {
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

export default Home
