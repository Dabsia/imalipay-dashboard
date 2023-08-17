import React from 'react'
import transaction from '../../Assets/Group 160.png'
import money from '../../Assets/Group 161.png'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './SummaryCard.css'

export const SummaryCard1 = () => {
    return (
        <div className='customerCard'  >
            <img className='summaryCardImg' src={transaction} alt='transaction' />
            <p>Total order Transactions</p>
            <h2>6,745,345</h2>
        </div>
    )
}


export const SummaryCard2 = () => {
    return (
        <div className='customerCard'  >
            <img className='summaryCardImg' src={money} alt='transaction' />
            <p>Total Collections</p>
            <h2>2,403,059</h2>
        </div>
    )
}

export const SummaryCard3 = () => {
    return (
        <div className='customerCard customerCard2'  >
            <p className='customerCard2Text' >Reconcile</p>
            <div className='cardPercentage' >
                <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({ pathColor: '#FFBD2E' })} />
            </div>
        </div>
    )
}
