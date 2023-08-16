import React from 'react'
import frame from '../../Assets/Frame.png'
import './PaymentCard.css'

const PaymentCard = ({ payment }) => {
    return (
        <div className='paymentCard' >
            <div className='paymentInfo' >
                <img className='paymentImage' src={frame} alt='frame' />
                <div className='paymentDetails' >
                    <div className='paymentStat' >
                        <p className='quartile' >1/4 Payment</p>
                        <p className='paymentStatus' >{payment.status}</p></div>
                    <p className='paymentDate' >{payment.dateBorrowed}</p>
                </div>
            </div>
            <p className='paymentAmount' >NGN {payment.amount}</p>
        </div>
    )
}

export default PaymentCard
