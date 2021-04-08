import React from 'react'
import './style.css'

const ContainerFiltroCursos = (props) => {

    return (
        <>
            <div className="fact-wrapper">
                <h3 className="header-facet" >
                    Cursos Recomendados
                </h3>
            </div>
            <div className="fact-wrapper">
                <h3 className="header-facet" >
                    Cursos em Alta
                </h3>
            </div>
            <div className="fact-wrapper">
                <h3 className="header-facet" >
                    Cursos Relacionados
                </h3>
            </div>
        </>
    )

}

export default ContainerFiltroCursos;