import React from 'react'
import Card from './Card'

const Cards = ({users}) => {
  return (
    <div className='w-full max-h-96 overflow-auto flex justify-center gap-3'>
        <Card users={users}/>
       
    </div>
  )
}

export default Cards