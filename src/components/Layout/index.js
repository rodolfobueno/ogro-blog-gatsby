import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"
import "../../styles/index.scss"

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
