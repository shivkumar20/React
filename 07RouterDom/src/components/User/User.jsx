import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 px-3 py-4 text-white text-lg'>User : {userid}</div>
  )
}

export default User