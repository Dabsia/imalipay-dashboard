import React from 'react'
import './Card.css'


const Card = ({img, desc, money}) => {
  return (
      <div className='Card'>
          <img className='cardImag' src={img} alt='dollar' />
          <p className='cardDetails'>{desc}</p>
          <h2 className='money'>{money}</h2>
      </div>
  )
}

export default Card