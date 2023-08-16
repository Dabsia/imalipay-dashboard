import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FulfilmentProfile from '../../Components/FulfilmentProfile/FulfilmentProfile'

const Fulfilment = () => {

    const navigate = useNavigate()
    const fulfilment = useSelector(state => state.user.singleFulfilment)

    const goBack = () => {
        navigate(-1)
    }


    return (
        <div>
            <span className='goBack' onClick={goBack} >Go back</span> / <span>{fulfilment.name}</span>
            <FulfilmentProfile />
        </div>
    )
}

export default Fulfilment
