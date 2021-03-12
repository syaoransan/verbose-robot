import React from 'react'
import Item from './Item'
import Accessories from '../images/Desktop-Accessories.jpg'
import Model3 from '../images/Desktop-Model3.jpeg'
import ModelS from '../images/Desktop-ModelS.jpeg'
import ModelX from '../images/Desktop-ModelX.jpeg'
import ModelY from '../images/Desktop-ModelY.jpeg'
import SolarPanels from '../images/Desktop-SolarPanels.jpeg'
import SolarRoof from '../images/Desktop-SolarRoof.jpeg'

const Items = () => {
    return (
        <div className='items'>
            <Item
                title = 'Model S'
                desc = 'Order Online for Touchless Delivery'
                descLink = ''
                backgroundImg = {ModelS}
                leftBtnTxt = 'Custom Order'
                leftBtnLink =''
                rightBtnTxt='Existing Inventory'
                rightBtnLink=''
                twoButtons='true'
                first

            />
        </div>
  
    )
}

export default Items
