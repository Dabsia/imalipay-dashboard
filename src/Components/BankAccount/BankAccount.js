import React from 'react'

const BankAccount = ({ closeModal }) => {
    return (
        <div className='createAccountCard'>

            < p className='closeModal backModal' onClick={closeModal} > Go back</ p>

            <div>
                <h2 className='connectAcctHeading' >Bank money account</h2>
                <p className='connectAcctText' >Choose an option to proceed</p>
            </div>
            <div className='modalButtonContainer' >
                <button className='modalButton' >Connect bank account</button>
                <button className='modalButton uploadStatementBtn' >Upload bank statement</button>
            </div>


        </div >
    )
}

export default BankAccount
