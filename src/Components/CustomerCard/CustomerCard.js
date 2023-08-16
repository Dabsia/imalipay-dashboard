import React from 'react'
import './CustomerCard.css'

const CustomerCard = ({ card }) => {
    return (
        <div className='customerCard' >
            <p>{card.title}</p>
            <h2>{card.amount}</h2>
            <div>
                <span>{card.percentage}%</span> <span>vs last month</span>
            </div>
        </div>
    )
}

export default CustomerCard
