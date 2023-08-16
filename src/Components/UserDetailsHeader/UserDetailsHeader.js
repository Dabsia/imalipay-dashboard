import React from 'react'
import './UserDetailsHeader.css'
import avatar from '../../Assets/avatar.png'

const UserDetailsHeader = () => {
  return (
      <div className='UserDetailsHeader'>
        <div className='userDesc'>
              <h2 className='Name'>Hello, Alex</h2>
              <p className='welcomeTextDesc'>Here’s what’s going on with your account.</p>
          </div>
          <div className='userDetails'>
              <div className='notification'>
                <div className='notificationBox'>
                    <i className="ri-notification-2-line bell"></i>
                    <div className='numberBox'>
                        <span className='number'>2</span>
                    </div>
                </div>
              </div>
              <div className='IDBox'>
                  <img src={avatar} alt='avatar' />
                  <div className='nameHolderParent'>
                    <div className='nameHolder'>
                        <p className = 'username'>Alex</p>
                        <i className="ri-arrow-down-s-line bell"></i>
                    </div>
                    <p className='vendorId'>Vendor ID: 3945823</p>
                  </div>
              </div>
          </div>
          
      </div>
  )
}

export default UserDetailsHeader