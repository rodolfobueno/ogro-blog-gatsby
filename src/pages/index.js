import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/index.scss"

class Home extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <SEO title="Ogro selvagem - Desmistificação do prazer. Para eles e elas." />
        <div className="justify-content-center box-index">
          <section>
            <div class="container justify-content-center">
              <div class="tm-section-title text-center">
                <img
                  src={"../ogro-perfil.png"}
                  width="160"
                  height="160"
                  className="ogro-face"
                />
                <br />
                <h2>Sejam bem vindos ao Covil do Ogro.</h2>
                <p>
                  Mussum Ipsum, cacilds vidis litro abertis. Praesent vel
                  viverra nisi. Mauris aliquet nunc non turpis scelerisque,
                  eget. Interessantiss quisso pudia ce receita de bolis, mais
                  bolis eu num gostis. Quem num gosta di mé, boa gentis num é.
                  Pra lá , depois divoltis porris, paradis.
                </p>
                <p>
                  Mé faiz elementum girarzis, nisi eros vermeio. Detraxit
                  consequat et quo num tendi nada. Suco de cevadiss deixa as
                  pessoas mais interessantis. Posuere libero varius. Nullam a
                  nisl ut ante blandit hendrerit. Aenean sit amet nisi.
                </p>
              </div>
            </div>
          </section>
          <section class="ebooks-call">
            Disponibilizamos dois e-books gratuitos para vocês se tornarem
            experts no assunto ORAL.
            <br />
            Realizem o donwload gratuitamente.
            <br />
            <img src={"../ebook-oral-neles.png"} width="300" height="300" />
            <img src={"../ebook-oral-neles.png"} />
          </section>
          <section>
            <div class="container justify-content-center">
              <div class="tm-section-title text-center">
                <p>Acompanhe todas as dias do ogro no instagram.</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
