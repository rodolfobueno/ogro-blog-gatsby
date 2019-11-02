import React from "react"

const Ebook = ({ name, url, titleLink, src }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={titleLink || "Realizar download do e-book"}
    >
        <img
            src={src}
            width="200"
            alt={`Ebook ${name}` }
        />
    </a>
)

export default Ebook