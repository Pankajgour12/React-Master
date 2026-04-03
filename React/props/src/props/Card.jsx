import React from 'react'

const Card = ({text, color}) => {
  return (
    <div>
        <button className={`px-4 py2 ${color} text-black rounded-md hover:bg-blue-400 `}>

            {text}
        </button>
    </div>
  )
}

export default Card