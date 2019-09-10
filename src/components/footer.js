import React from "react"

const Footer = () => (
  <div className="site-footer">
    <div className="row">
      <div className="col-lg-4 col-md-12 col-12 footer-social-links pb-3">
        <h6>Minhas redes sociais</h6>
        <ul className="social-links-list">
          <li>
            <a
              href="http://instagram.com/ogroselvagem"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"../instagram.png"} alt="Logo do Istagram" />
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
      <div className="col-lg-4 col-md-12 col-12 pb-3">
        <h6>E-books gratuitos</h6>
        <ul>
          <li>
            <a
              href="http://oralneles.ogroselvagem.com.br?origem=site-ogro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oral Neles
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-12 col-12">
        <h6>Contato</h6>
        <ul>
          <li>Email: contato@ogroselvagem.com.br</li>
          <li>Goiânia / Goiás</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Footer
