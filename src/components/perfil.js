import React from "react"
import Social from "../components/social"

const Perfil = () => (

    <div className="col-12 justify-content-center perfil">
        <img
            src={"../perfil-ogro.jpg"}
            width="160"
            height="160"
            className="ogro-face"
            alt="Imagem do ogro"
        />
        <div className="pt-3 pb-3">
            <h6>
                <strong>Ogro Selvagem</strong>
            </h6>
            <p>
                O sexpert que desmistifica o sexo, 
                quebra os tabus por um mundo 
                com muito mais prazer e muito mais orgasmos.
            </p>
            
        </div>
        <Social />
    </div>
)

export default Perfil