import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Customer.css'
import CustomerProfile from '../../Components/CustomerProfile/CustomerProfile'
import { useSelector } from 'react-redux'

const Customer = () => {

    const navigate = useNavigate()
    const customer = useSelector(state => state.user.singleCustomer)

    const goBack = () => {
        navigate(-1)
    }


    return (
        <div>
            <span className='goBack' onClick={goBack} >Go back</span> / <span>{customer.name}</span>
            <CustomerProfile />
        </div>
    )
}

export default Customer
