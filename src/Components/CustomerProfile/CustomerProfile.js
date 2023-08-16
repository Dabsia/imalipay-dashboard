import React from 'react'
import { useSelector } from 'react-redux'
import './CustomerProfile.css'
import CustomerProfileForm from '../CustomerProfileForm/CustomerProfileForm'
import CustomerPayments from '../CustomerPayments/CustomerPayments'

const CustomerProfile = () => {

    const customer = useSelector(state => state.user.singleCustomer)

    const customerName = customer.name.split(' ')
    const customerFirstName = customerName[0][0]
    const customerLastName = customerName[1][0]



    return (
        <div className='customerProfileContainer' >
            <div className='customerFormleftSection' >
                <h1 className='customerProfileHeader' >Customer's Profile</h1>
                <div className='customerInfoContainer' >
                    <div className='customerInitialsContainer' >
                        <p className='customerInitials' >{`${customerFirstName}${customerLastName}`}</p>
                    </div>
                    <div className='nameContainer' >
                        <p className='nameContainerName' >{customer.name}</p>
                        <p className='nameContainerNumber' >Customer</p>
                    </div>
                </div>
                <CustomerProfileForm />
            </div>
            <CustomerPayments />
        </div>
    )
}

export default CustomerProfile
