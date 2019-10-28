import React from "react"

const Ebooks = () => (
    <div className="col-12 justify-content-center pt-5">
        <h6>
            <strong>Livros digitais gratuitos</strong>
        </h6>
        <ul>
            <li>
                <a
                    href="http://oralnelas.ogroselvagem.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Realizar download do e-book"
                >
                    <img
                        src={"../ebook-oral-nelas.png"}
                        width="200"
                        alt="Capa Livro Digital Oral Nelas"
                    />
                </a>
            </li>
            <li class="pt-2">
                <a
                    href="http://oralneles.ogroselvagem.com.br?origem=site-ogro"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Realizar download do e-book"
                >
                    <img
                        src={"../ebook-oral-neles.png"}
                        width="200"
                        alt="Capa Livro Digital Oral Neles"
                    />
                </a>
            </li>
        </ul>
    </div>
)

export default Ebooks