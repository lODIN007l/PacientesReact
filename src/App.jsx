import { useState } from 'react'
import Formulario from './components/Formulario'
import Header from  "./components/Header"
import ListadodePacientes from './components/ListadodePacientes'


function App() {
  

  return (
    <div  className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex '>
      <Formulario/>
      <ListadodePacientes/>
      </div>
     
    </div>
  )
}

export default App
