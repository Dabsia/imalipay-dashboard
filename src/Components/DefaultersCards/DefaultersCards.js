import React from 'react'
import accountIcon from '../../Assets/account_box.png'
import gpp_maybe from '../../Assets/gpp_maybe.png'
import monetization from '../../Assets/monetization_on.png'
import DefaultersCard from '../DefaultersCard/DefaultersCard'

const DefaultersCards = () => {

    const cardsLength = [
        {
            id: 0,
            title: 'Total Default Amount (NGN)',
            amount: '3,160,010',
            icon: monetization,
            innerBackground: '#D1FADF',
            outerBackground: 'linear-gradient(0deg, #ECFDF3, #ECFDF3)'

        },
        {
            id: 1,
            title: 'Total Default (NGN)',
            amount: '890,100',
            icon: gpp_maybe,
            innerBackground: '#D9D9D9',
            outerBackground: 'linear-gradient(0deg, #F9FAFB, #F9FAFB)'

        },
        {
            id: 2,
            title: 'Total numbers of Defaulters',
            amount: '316',
            icon: accountIcon,
            innerBackground: '#FFD580',
            outerBackground: '#FFBD2E33'

        }
    ]

    return (
        <div className='customerCardList'  >
            {
                cardsLength.map((card, id) => {
                    return (
                        <DefaultersCard key={id} card={card} />
                    )
                })
            }

        </div>
    )
}

export default DefaultersCards
