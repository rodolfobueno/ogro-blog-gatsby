import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

const Layout = ({ children }) => (
  <div className="layout-main">
    <div className="layout-header">
      <Header />
    </div>
    <div className="layout-content">
      <main>{children}</main>
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
