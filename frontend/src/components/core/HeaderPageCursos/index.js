import './style.css'
import imageLogo from '../../assets/logo.png'

const HeaderPagesCursos = () => {
    <header>
            <div class="menu">
                <a href="index.html" class="menu-logo">
                    <img src={imageLogo} alt="BrainXpert logo"/>
                </a>
                 {/* <button class="nav-toggle" aria-label="toggle navegation">
              <span class="hamburguer"></span>
            </button>  */}
                <nav class="nav">
                    <ul class="menu-navbar">
                        <li class="menu-navbar-item"><a href="#">Aprenda</a>
                        </li>
                        <li class="menu-navbar-item"><a href="#">Comunidade</a>
                        </li>
                        <li>
                            <i class="large material-icons">circle_notifications</i>
                        </li>
                        <li class="menu-navbar-item">
                            <a href="#">Bruno</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="subMenu">
                <h1>Dashboard</h1>
            </div>
        </header>
}

export default HeaderPagesCursos