import React from 'react'
import './Calificacion.css'
import { Icon } from '@iconify/react';

const Calificacion = () => {
  return (
    <div className='container-calificacion'>
      <div className="stars">
        <Icon className='star' icon="solar:star-bold" />
        <Icon className='star' icon="solar:star-bold" />
        <Icon className='star' icon="solar:star-bold" />
      </div>

      <div className="revision">
        <span>2 reviews</span>
      </div>

    </div>
  )
}

export default Calificacion
