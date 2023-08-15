import React from 'react'
import { NavBar } from './Components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ComprasScreen } from './Pages/ComprasScreen'
import { CarritosScreen } from './Pages/CarritosScreen'
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from './context/CarritoProvider'

export const CarritoApp = () => {
  return (
    <ProductosProvider>
        <CarritoProvider>
        <NavBar></NavBar>
        <div className='container'>
        <Routes>
            <Route path='/' element={<ComprasScreen></ComprasScreen>}></Route>
            <Route path='/carrito' element={<CarritosScreen></CarritosScreen>}></Route>
            <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
        </Routes>
        </div>
        </CarritoProvider>
    </ProductosProvider>
  )
}
