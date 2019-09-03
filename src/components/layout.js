import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div className="layout-main">
    <div className="layout-header">
      <Header />
    </div>
    <div className="layout-content">
      <main>{children}</main>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
