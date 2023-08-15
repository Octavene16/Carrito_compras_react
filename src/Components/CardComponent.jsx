
import React, { useState } from 'react'
import '../styles/Card.css'

export const CardComponent = ({imagen, titulo, descripcion, precio, handleAgregar, handleQuitar, handleDiminiuir, handleAumentar}) => {

    const [added, setAdded] = useState(false)

    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)

    }

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }

  return (
    <div className='tarjeta'>
        <img src={imagen} alt={titulo} className='tarjeta-imagen'></img>
        <div className='tarjeta-contenido'>
        <h3 className='tarjeta-titulo'>{titulo}</h3>
        <p className='tarjeta-descripcion'>{descripcion}</p>
        <p className='tarjeta-precio'>{precio}</p>



        {
        added
        ? <button onClick={clickQuitar} type='button' className='boton-quitar'>Quitar del carrito</button>
        : <button onClick={clickAgregar}  type='button' className='boton-agregar'>Agregar al carrito</button>
    }
            </div>
    </div>


  )
}
