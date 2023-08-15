import React, { useContext } from 'react'
import { useState } from 'react'
import {CarritoContext} from '../context/CarritoContext'

export const CarritosScreen = () => {
  
  const {listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra} = useContext(CarritoContext)
  

  const CalcularTotal = () => {
    return listaCompras.reduce((total, item) => total+item.price*item.cantidad,0).toFixed(2)

  }

  const handleImpresion = () => {
    if (listaCompras.length !== 0)
    {print()}
    else {
  }
}

    return (
    <>
        <div className='Container'>
            <h1>Carrito de compras: </h1>
            <hr />

            <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {
      listaCompras.map(item=>(
        <tr key={item.id}>
        <th>{item.title}</th>
        <td>{item.price}</td>
        <td>
          <button onClick={() => disminuirCantidad(item.id)} className='btn btn-ouline-primary'>-</button>
          <button className='btn btn-primary-disabled'>{item.cantidad}</button>
          <button onClick={() => aumentarCantidad(item.id)} className='btn btn-ouline-primary'>+</button>


        </td>
        <td><button type='button' onClick={()=>eliminarCompra(item.id)} className='btn btn-danger'>Eliminar</button></td>
      </tr> 
      ))
    }
    <thead><tr>Total: </tr></thead>
  <td></td>
    
    <td><b>${CalcularTotal()}</b></td>
    <td></td>
  </tbody>
</table>


<div className='d-grid gap-2'>
<button onClick={() => handleImpresion()} className='btn btn-primary' disabled={listaCompras<1}>COMPRAR</button>
</div>

        </div>
    </>
  )
}
