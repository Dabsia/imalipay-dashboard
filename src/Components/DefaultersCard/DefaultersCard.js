import React from 'react'
import './DefaultersCard.css'

const DefaultersCard = ({ card }) => {
    return (
        <div className='customerCard' >
            <div className='outerBg' style={{ background: card.outerBackground }} >
                <div className='innerBg' style={{ backgroundColor: card.innerBackground }} >
                    <img src={card.icon} alt='icon' />
                </div>
            </div>
            <p>{card.title}</p>
            <h1>{card.amount}</h1>
        </div>
    )
}

export default DefaultersCard
