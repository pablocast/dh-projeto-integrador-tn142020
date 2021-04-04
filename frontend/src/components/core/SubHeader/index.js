import './styles.css'

const SubHeader = () => {
    return (
        <>
            <header className="SubHeader">
                <nav className="SubNav">
                    <ul>
                        <li>
                            <a href="#cursosRecomendados">Cursos recomendados</a>
                        </li>
                        <li>
                            <a href="#cursosEmAlta">Cursos em alta</a>
                        </li>
                        <li>
                            <a href="#cursosRelacionados">Cursos relacionados</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default SubHeader