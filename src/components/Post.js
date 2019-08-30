import React from "react"
import { Card, CardTitle, CardText, CardBody, CardSubtitle } from "reactstrap"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Post = ({ titulo, autor, id, data, conteudo, imgFluid }) => {
  return (
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
        <CardText>{conteudo}</CardText>
      </CardBody>
    </Card>
  )
}

export default Post
