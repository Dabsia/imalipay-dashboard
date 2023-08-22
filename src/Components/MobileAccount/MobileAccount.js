import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMobileAccountModal } from '../../Redux/Actions'

const MobileAccount = () => {

    const dispatch = useDispatch()

    const closeMobileModal = () => {
        dispatch(closeMobileAccountModal())
    }

    return (
        <div className='createAccountCard'>

            < p className='closeModal backModal' onClick={closeMobileModal} > Go back</ p>

            <div>
                <h2 className='connectAcctHeading' >Mobile money account</h2>
                <p className='connectAcctText' >Choose an option to proceed</p>
            </div>
            <div className='modalButtonContainer' >
                <button className='modalButton' >Connect MPesa account</button>
                <button className='modalButton uploadStatementBtn' >Upload Mpesa statement</button>
            </div>


        </div >
    )
}

export default MobileAccount
