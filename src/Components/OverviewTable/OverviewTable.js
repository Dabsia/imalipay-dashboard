import React from 'react'
import './OverviewTable.css'
import { OverviewTableData } from './OverviewTableData'


const OverviewTable = () => {
  return (
      <div className='divTable'>
          <div className='headers'>
              <div className='tableHeader checkBoxContainer'>
                  <i className="ri-checkbox-blank-line"></i>
                  <p >CUSTOMER</p>
              </div>
              <p className='tableHeader'>DEPOSIT</p>
              <p className='tableHeader'>DATE</p>
              <p className='tableHeader'>VOUCHER NO.</p>
              <p className='tableHeader'>TRANS STATUS.</p>
          </div>
          
          
              {
              OverviewTableData.map((data, id) => {
                  
                      return (
                          <div key = {id} className='headers rowData'>
                                <div className='tableHeader checkBoxContainer'>
                  <i className="ri-checkbox-blank-line"></i>
                  <div className='customerBox' >
                      <img src={data.img} alt='girl' />
                      <div className='customerDetails'>
                          <p className='customerName'>{data.name}</p>
                          <p className='customerNumber'>{data.number}</p>
                      </div>
                  </div>
              </div>
              <p className=' tableHeader amount'>NGN{data.amount}</p>
              <p className=' tableHeader tableHeader'>{data.date}</p>
              <p className='. tableHeader voucher'>{data.voucher}</p>
              <div className='tableHeader'>
              
                                  <div className='successContainer' style={{
                    backgroundColor: (data.status ? '#FEF3F2' : '#ECFDF3')
                }}>
                                      <p className=' successText'
                                      style={{
                    color: (data.status? '#B42318' : '#ECFDF3')
                }}
                                      >{data.status}</p>
                    </div>
              </div>
          
                            </div>
                      )
                  })
              }
              
            
              
      
      </div>
  )
}

export default OverviewTable