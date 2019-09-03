import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"

import { Button, Form, FormGroup, Input } from "reactstrap"

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
            <h2>Sejam bem vindos ao Covil do Ogro.</h2>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra
              nisi. Mauris aliquet nunc non turpis scelerisque, eget.
              Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
              gostis. Quem num gosta di mé, boa gentis num é. Pra lá , depois
              divoltis porris, paradis.
            </p>
            <p>
              Mé faiz elementum girarzis, nisi eros vermeio. Detraxit consequat
              et quo num tendi nada. Suco de cevadiss deixa as pessoas mais
              interessantis. Posuere libero varius. Nullam a nisl ut ante
              blandit hendrerit. Aenean sit amet nisi.
            </p>
          </div>
        </div>
      </section>
      <section className="ebooks-call">
        Disponibilizamos dois e-books gratuitos para vocês se tornarem experts
        no assunto ORAL.
        <br />
        Realizem o donwload gratuitamente.
        <br />
        <img src={"../ebook-oral-neles.png"} width="200" height="200" alt="" />
        <img src={"../ebook-oral-neles.png"} width="200" height="200" alt="" />
      </section>
      <section className="pt-5 pb-4">
        <div className="container justify-content-center">
          <div className="tm-section-title text-center">
            <p>Inscreva-se para acompanhar todo o conteúdo em primeira mão.</p>
            <Form className="justify-content-center">
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Seu melhor e-mail"
                />
              </FormGroup>
              <Button>Cadastrar</Button>
            </Form>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Home
