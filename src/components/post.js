import React from "react"
import { Card, CardTitle, CardText, CardBody, CardSubtitle } from "reactstrap"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const Post = ({ titulo, autor, id, data, resumo, imgFluid }) => (
  <Card key={id}>
    <Link to={`/${id}`}>
      <Img className="card-image-top" fluid={imgFluid} />
    </Link>
    <CardBody>
      <CardTitle>
        <Link to={`/${id}`}> {titulo} </Link>
      </CardTitle>
      <CardSubtitle>
        por <span className="text-info">{autor}</span> |{" "}
        <span className="text-info">{data}</span>
      </CardSubtitle>
      <hr />
      <CardText>{resumo}</CardText>
    </CardBody>
  </Card>
)

Post.propTypes = {
  titulo: PropTypes.node.isRequired,
  autor: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  data: PropTypes.node.isRequired,
  resumo: PropTypes.node.isRequired,
  imgFluid: PropTypes.node.isRequired,
}

export default Post
