import React from "react"
import {
  Navbar,
  NavbarBrand,
} from "reactstrap"

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar light fixed="top" expand="sm">
          <div className="container justify-content-center">
            <NavbarBrand href="/">
              <img
                src={"../ogro-logo.png"}
                width="120"
                height="80"
                alt="Logo do Ogro"
              />
            </NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  }
}
