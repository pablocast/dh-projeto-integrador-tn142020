import React from "react";
import "./style.css";
import imageLogo from "../../../assets/img/logo_transp.png";
import { Link } from "react-router-dom";
import auth from "../../auth/auth-helper";
import { useHistory } from "react-router-dom";

const HeaderPagesCursos = (props) => {
  const { username } = props;
  let history = useHistory();

  return (
    <header className="Header-enroll">
      <div className="menu">
        <Link to="/" className="menu-logo">
          <img src={imageLogo} alt="BrainXpert logo" />
        </Link>
        {/* <button class="nav-toggle" aria-label="toggle navegation">
              <span class="hamburguer"></span>
            </button>  */}
        <nav className="nav">
          <ul className="menu-navbar">
            <li className="menu-navbar-item">
              {username && <a href="#">{username}</a>}
              {!username && <a href="#">Meu perfil</a>}
            </li>
            <li className="menu-navbar-item">
              <a
                onClick={() => {
                  auth.clearJWT(() => history.push("/"));
                }}
              >
                Sair
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPagesCursos;
