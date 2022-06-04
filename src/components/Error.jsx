import React from 'react'


function Error({mensaje}) {
  return (
    <div className='bg-red-700 p-3 text-white text-center uppercase font-bold rounded mb-3'>
    <p>
      {mensaje}
    </p>
  </div>
  )
}



export default Error
