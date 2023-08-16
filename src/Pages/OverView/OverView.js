import React from 'react'
import Card from '../../Components/Card/Card'
import './OverView.css'
import { OverviewData } from './OverviewData'
import CustomTable from '../../Components/CustomTable/CustomTable'

const OverView = () => {
    return (
        <div className='OverView'>
            <h2 className='OverViewText'>Overview</h2>
            <div className='cardContainer'>
                {
                    OverviewData.map((card, id) => {
                        return <Card key={id} img={card.img} desc={card.desc} money={card.money} />
                    })
                }
            </div>
            <CustomTable />

        </div>
    )
}

export default OverView