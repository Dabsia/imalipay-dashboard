import React from 'react'
import './CustomerProfileForm.css'
import { useSelector } from 'react-redux'

const CustomerProfileForm = () => {

    const customer = useSelector(state => state.user.singleCustomer)


    const customerName = customer?.name.split(' ')
    const customerFirstName = customerName[0]
    const customerLastName = customerName[1]

    return (
        <form className='customerProfileFormContainer' >
            <div className='parentInputContainer' >

                <div className='inputContainer' >
                    <label>First Name</label>
                    <input defaultValue={customerFirstName} className='customerInput' />
                </div>

                <div className='inputContainer' >
                    <label>Last Name</label>
                    <input defaultValue={customerLastName} className='customerInput' />
                </div>
            </div>
            <div className='parentInputContainer' >
                <div className='homeAddressContainer' >
                    <label>Phone Number</label>
                    <input defaultValue={customer?.number} className='inputContainerAddress' />
                </div>
            </div>
            <div className='parentInputContainer' >
                <div className='inputContainer' >
                    <label>Date of Birth</label>
                    <input defaultValue={customer?.dateOfBirth} className='customerInput' />
                </div>

                <div className='inputContainer' >
                    <label>State of Residence</label>
                    <input defaultValue={customer?.stateOfResidence} className='customerInput' />
                </div>
            </div>
            <div className='parentInputContainer' >
                <div className='inputContainer' >
                    <label>Bank Name</label>
                    <input defaultValue={customer?.bankName} className='customerInput' />
                </div>

                <div className='inputContainer' >
                    <label>Account Number</label>
                    <input defaultValue={customer?.acctNumber} className='customerInput' />
                </div>
            </div>
            <div className='parentInputContainer' >
                <div className='homeAddressContainer' >
                    <label>Home Address</label>
                    <input defaultValue={customer?.address} className='inputContainerAddress' />
                </div>
            </div>
            {/*<div className='hr' />
            <div className='parentInputContainer' >
                <div className='homeAddressContainer' >
                    <label>Location of Purchase</label>
                    <input defaultValue={customer?.location} className='inputContainerAddress' />
                </div>
            </div>
            <div className='parentInputContainer' >
                <div className='homeAddressContainer' >
                    <label>Vehicle Model</label>
                    <input defaultValue={customer?.vehicle} className='inputContainerAddress' />
                </div>
            </div>
            <div className='parentInputContainer' >
                <div className='homeAddressContainer' >
                    <label>Insurance Provider</label>
                    <input defaultValue={customer?.company} className='inputContainerAddress' />
                </div>
    </div>*/}
        </form>
    )
}

export default CustomerProfileForm
