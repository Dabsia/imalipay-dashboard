import React from 'react'
import CustomerCard from '../CustomerCard/CustomerCard'
import './CustomerCards.css'

const CustomerCards = () => {
    const cardsLength = [
        {
            id: 0,
            title: 'Total Customers',
            amount: '2,420',
            percentage: 40
        },
        {
            id: 1,
            title: 'Total Active Customers',
            amount: '1,210',
            percentage: 10
        },
        {
            id: 2,
            title: 'Total Defaulters',
            amount: '316',
            percentage: 20
        }
    ]
    return (
        <div>
            <h1>Customers</h1>
            <div className='customerCardList' >
                {
                    cardsLength.map((card, id) => {
                        return (
                            <CustomerCard key={id} card={card} />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default CustomerCards


