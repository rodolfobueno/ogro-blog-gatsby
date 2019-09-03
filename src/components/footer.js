import React from "react"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Ogro Selvagem</h4>
    <p className="text-center">Siga o ogro nas redes sociais</p>
    <div className="footer-social-links">
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
  </div>
)

export default Footer
