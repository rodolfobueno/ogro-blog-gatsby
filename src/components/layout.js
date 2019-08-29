import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Header from "./header"

const Layout = ({ children }) => (
  <div>
    <div>
      <Header />
    </div>
    <div className="container conteudo-main">
      <main>{children}</main>
    </div>
    <footer>
      {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
