import './style.css'
import imageLogo from '../../../assets/img/logo.jpg'

const HeaderPagePlataforma = () => {
    return (
        <header>
        <div className="menu">
            <a href="index.html" className="menu-logo">
                <img src={imageLogo} alt="BrainXpert logo"/>
            </a>
            {/* <button className="nav-toggle" aria-label="toggle navegation">
              <span className="hamburguer"></span>
            </button>  */}
            <nav className="nav">
                <ul className="menu-navbar">
                    <li className="menu-navbar-item"><a href="#quem-somos">quem somos</a>
                    </li>
                    <li className="menu-navbar-item"><a href="#apoiadores">Apoiadores</a>
                    </li>
                    <li className="menu-navbar-item">
                        <a href="#vagas">Vagas</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    )
}

export default HeaderPagePlataforma