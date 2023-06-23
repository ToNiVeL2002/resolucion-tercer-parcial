import React from 'react'
import './Contenedor.css'
import InfoCactus from './InfoCactus'
import Calificacion from './Calificacion'
import Ordenes from './Ordenes'

const Contenedor = () => {
  return (
    <div className='contenedor'>

        <InfoCactus/>

        <Calificacion/>

        <Ordenes/>


      
    </div>
  )
}

export default Contenedor
