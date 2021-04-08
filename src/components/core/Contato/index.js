import React from "react";
import "./style.css";

const containerContato = () => {
  return (
    <div className="contato">
      <section className="contato-box">
        <div className="contato-left">
          <div className="local">
            <h3>Endereço</h3>
            <p>Beco diagonal - centro 157</p>
          </div>
          <div className="fone">
            <h3>Telefone</h3>
            <p>+55 11 4002-8922</p>
          </div>
          <div className="email">
            <h3>Email</h3>
            <p>exemple@mail.com</p>
          </div>
        </div>
        <div className="form-height">
          <h2>Envia uma mensagem</h2>
          <form className="form" method="POST">
            <input
              className="field"
              name="name"
              placeholder="digite seu nome completo"
            />
            <input className="field" name="email" placeholder="E-mail" />
            <textarea
              className="field"
              name="mesage"
              placeholder="Digite sua mensagem"
            ></textarea>
            <input type="submit" value="Enviar"></input>
          </form>
        </div>
      </section>
    </div>
  );
};

export default containerContato;
