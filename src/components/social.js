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
        { <a
          href="https://www.youtube.com/channel/UCJJZxlPXshI649iWSkEtpYw/"
          className="youtube border-radius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"../youtube.png"} alt="Logo do Youtube" />
        </a>}
        <a
          href="mailto:contato@ogroselvagem.com.br"
          className="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"../gmail.png"} alt="Me envie um e-mail" />
        </a>
        <a
          href="https://twitter.com/ogroselvagem"
          className="twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"../twitter.png"} alt="Me envie um e-mail" />
        </a>
      </li>
    </ul>
  </div>
)

export default Social
