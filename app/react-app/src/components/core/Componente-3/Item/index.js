import './style.css'
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardUp, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";


const Item = (props) => {
    const { cargo, testimonio, nome, avatar } = props
    return (
        <p>{cargo}</p>
    );
}

export default Item