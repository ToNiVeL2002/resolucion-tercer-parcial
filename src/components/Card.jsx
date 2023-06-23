import React from 'react'
import './Card.css'
import Head from './Head'
import FondoCactus from './FondoCactus'
import InfoCactus from './InfoCactus'
import Calificacion from './Calificacion'
import Ordenes from './Ordenes'
import Contenedor from './Contenedor'

const Card = () => {
  return (
    <div className='container-card'>
        <FondoCactus/>
        <Head/>
        <Contenedor/>

    </div>
  )
}

export default Card
