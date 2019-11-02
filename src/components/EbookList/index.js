import React from "react"
import Ebook from "../Ebook"

const EbookList = () => (
    <div className="col-12 justify-content-center pt-5">
        <h6>
            <strong>Livros digitais gratuitos</strong>
        </h6>
        <ul>
            <li>
                <Ebook
                    name="Oral Nelas"
                    url="http://oralnelas.ogroselvagem.com.br"
                    src="../ebook-oral-nelas.png"
                />
            </li>
            <li class="pt-2">
                <Ebook
                    name="Oral Neles"
                    url="http://oralneles.ogroselvagem.com.br"
                    src="../ebook-oral-neles.png"
                />
            </li>
        </ul>
    </div>
)

export default EbookList