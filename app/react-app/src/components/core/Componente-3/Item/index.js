import './style.css'
import React from "react";
import {MDBCol, MDBCard, MDBCardBody } from "mdbreact"

const Item = (props) => {
    const { cargo, testimonio, nome, avatar } = props
    console.log('../../../../assets/img/'+ `${avatar}`)
    return (
            <MDBCol className="Card">
                <MDBCard testimonial className="Testimonial">
                    <MDBCardBody className='Testimonial__top'>
                        <p className="Testimonial__top__testimonio">
                            {testimonio}
                        </p>
                    </MDBCardBody>
                    <MDBCardBody className='Testimonial__bottom'>
                        <div className='Testimonial__bottom__title'>
                            <h5>{nome}</h5>
                            <h1>{cargo}</h1>
                        </div>
                        <div className="Testimonial__bottom__avatar">
                            <img
                            src={require('../../../../assets/img/'+ `${avatar}`).default}
                            alt=""
                            className="rounded-circle img-fluid"
                            />
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
    );
}
export default Item