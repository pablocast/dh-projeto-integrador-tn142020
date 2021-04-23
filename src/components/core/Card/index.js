import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <>
      <div className="card text-dark border-light mb-3 bg-light">
        <img
          className="card-img-top rounded pt-2"
          style={{ width: "200px", margin: "auto" }}
          src={props.img}
          alt={props.alt}
        />
        <div className="card-body">
          <h5 className="card-title"> {props.title} </h5>
          <p className="card-text lead"> {props.description} </p>
          <a href="#" className="btn btn-primary">
            Ver mais
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
