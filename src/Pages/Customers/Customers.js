import React from 'react'
import './Customers.css'
import CustomerCards from '../../Components/CustomerCards/CustomerCards'
import CustomerTable from '../../Components/CustomerTable/CustomerTable'


const Customers = () => {
    return (
        <div className='customers' >
            <CustomerCards />
            <CustomerTable />
        </div>
    )
}

export default Customers
