import React from 'react'
import './CustomerPayments.css'
import PaymentCard from '../PaymentCard/PaymentCard'
import { useSelector } from 'react-redux'

const CustomerPayments = () => {

    const customer = useSelector(state => state.user.singleCustomer)

    return (
        <div className='customerHistoryContainer' >
            <p className='transactionHistoryText' >Transaction History</p>
            <div className='moneyContainer' >
                <div className='loanedContainer' >
                    <p className='amountPaid' >Amount Loaned(NGN)</p>
                    <h2>{customer.amountLoaned}</h2>
                </div>
                <div>
                    <p className='amountPaid'>Amount Paid(NGN)</p>
                    <h2>{customer.amountPaid}</h2>
                </div>
            </div>
            <p className='transactionHistoryText' >Pending Payments</p>
            <div className='pendingPayments' >
                {
                    customer?.pendingPayment.map(payment => {
                        return (
                            <PaymentCard key={payment.id} payment={payment} />
                        )
                    })
                }
            </div>


        </div>
    )
}

export default CustomerPayments
