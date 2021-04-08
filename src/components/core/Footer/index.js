import React from 'react'
import "./style.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-copy">
        <p>Todos os direitos reservados BrainXpert &copy;</p>
      </div>
      <div class="footer-container-links">
        <ul>
          <li class="titulo_rodape">Cursos</li>
          <li class="font-light">Front-end</li>
          <li class="font-light">Back-End</li>
          <li class="font-light">Mobile-Futter</li>
          <li class="font-light">Full-Stack</li>
        </ul>
      </div>
      <div class="footer-container-links">
        <ul>
          <li class="titulo_rodape">Empresas</li>
          <li class="font-light">Banco Itai</li>
          <li class="font-light">Magazine Luci</li>
          <li class="font-light">Nicolas e Cia</li>
          <li class="font-light">Summer-down</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
