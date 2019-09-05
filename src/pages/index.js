import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"

import { graphql, StaticQuery } from "gatsby"

import { Col, Row } from "reactstrap"

import Post from "../components/post"

import { Button } from "reactstrap"

const Home = () => (
  <Layout>
    <SEO title="Ogro selvagem - Desmistificação do prazer. Para eles e elas." />
    <div className="justify-content-center box-index">
      <section>
        <div className="container justify-content-center">
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
              Lugar onde a teoria e a prática do sexo se encontram em harmonia.
              <br />
              Confie e siga o guia. Aqui você irá aprender mais sobre as
              verdades e mitos do sexo, sobre os seus mistérios e, claro, como
              dar mais prazer aos seus companheiro(a)s.
            </p>
            <p>
              Ficou curioso para saber quem é o Ogro ? <br />
              Quer conhecer um pouco da minha história ? <br />
            </p>
            <Button outline color="primary">
              Quero conhecer a história do Ogro
            </Button>
          </div>
        </div>
      </section>
      <section className="ebooks-call mt-4">
        <p>
          Disponibilizei um e-book gratuito para vocês se tornarem experts no
          assunto: ORAL NELES.
          <br />
          Realizem o donwload agora mesmo.
        </p>
        <br />
        <a
          href="http://oralneles.ogroselvagem.com.br?origem=site-ogro"
          target="_blank"
          rel="noopener norefferer"
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
