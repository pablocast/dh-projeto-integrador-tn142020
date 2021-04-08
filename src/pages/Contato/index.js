import React from 'react'
import './style.css'
import Header from '../../components/core/Header'
import Footer from '../../components/core/Footer'
import Contato from '../../components/core/Contato'

const contato = () => {

    return (
        <main className="main"> 
        <Header />
        <Contato className="contato"/>
        <Footer />
        </main>
    )

}

export default contato