import React from 'react'
import './Defaulters.css'
import DefaultersCards from '../../Components/DefaultersCards/DefaultersCards'
import DefaultersTable from '../../Components/DefaultersTable/DefaultersTable'


const Defaulters = () => {
    return (
        <div>
            <h2 className='summaryText' >Defaulters</h2>
            <DefaultersCards />
            <DefaultersTable />
        </div>
    )
}

export default Defaulters
