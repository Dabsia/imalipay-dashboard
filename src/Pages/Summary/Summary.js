import React from 'react'
import link from '../../Assets/link.png'
import description from '../../Assets/description.png'
import account_circle_white from '../../Assets/account_circle_white.png'
import './Summary.css'
import SummaryCards from '../../Components/SummaryCards/SummaryCards'
import SummaryTable from '../../Components/SummaryTable/SummaryTable'

const Summary = () => {



    return (
        <div>
            <div className='summaryHeadingContainer' >
                <p className='summaryText' >Account Summary</p>
                <div className='summaryBtnHolders' >
                    <div className='summaryBtn' >
                        <img className='btnImg' src={link} alt='icon' />
                        <p >Connect ERP</p>
                    </div>
                    <div className='summaryBtn summaryBtnContainer' >
                        <img className='btnImg' src={description} alt='icon' />
                        <p  >Upload CSV</p>
                    </div>
                    <div className='summaryBtn connectAcct' >
                        <img className='btnImg' src={account_circle_white} alt='icon' />
                        <p  >Connect Account</p>
                    </div>
                </div>

            </div>
            <SummaryCards />
            <div className='summaryHr' />
            <SummaryTable />

        </div>
    )
}

export default Summary
