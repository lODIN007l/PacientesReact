import React from 'react'

import Pacientes from  "./Pacientes"




function ListadodePacientes({pacientes,setPaciente,eliminarPaciente}) {



  return (
    <>
    <div className='md:w-1/2  lg:w-3/5 md:h-screen overflow-y-scroll' >
      {pacientes && pacientes.length ? (
        <>
        <h2 className='font-black text-center text-3xl'>
          Listado de Pacientes
          </h2>
          <p className=' mt-5 mb-10 text-center text-lg'>
              Administra tus {''}
              <span className='text-indigo-600 font-bold'>
                Pacientes y Citas
              </span>
          </p>
          {pacientes.map((paciente)=> (
            <Pacientes
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
            
            ))}
            

        </>

      ):( <>
            <h2 className='font-black text-center text-3xl'>
                No hay pacientes
            </h2>
          <p className=' mt-5 mb-10 text-center text-lg'>
              Comineza agregando pacientes {''}
              <span className='text-indigo-600 font-bold'>
                y apareceran en este lugar
              </span>
          </p>
        </>)}
    
      
    </div>
    </>
  )
}

export default ListadodePacientes