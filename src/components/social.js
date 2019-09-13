import React from "react"

const Social = () => (
  <div className="social-links">
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
        <a
          href="mailto:contato@ogroselvagem.com.br"
          className="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"../gmail.png"} alt="Me envie um e-mail" />
        </a>
      </li>
    </ul>
  </div>
)

export default Social
