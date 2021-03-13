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
                first = 'true'
            />
               <Item
                title = 'Model S'
                desc = 'Order Online for Touchless Delivery'
                descLink = ''
                backgroundImg = {Model3}
                leftBtnTxt = 'Custom Order'
                leftBtnLink =''
                rightBtnTxt='Existing Inventory'
                rightBtnLink=''
                twoButtons='true'
             
            />
                 <Item
                title = 'Model S'
                desc = 'Order Online for Touchless Delivery'
                descLink = ''
                backgroundImg = {ModelX}
                leftBtnTxt = 'Custom Order'
                leftBtnLink =''
                rightBtnTxt='Existing Inventory'
                rightBtnLink=''
                twoButtons='true'
             
            />
                 <Item
                title = 'Model S'
                desc = 'Order Online for Touchless Delivery'
                descLink = ''
                backgroundImg = {ModelY}
                leftBtnTxt = 'Custom Order'
                leftBtnLink =''
                rightBtnTxt='Existing Inventory'
                rightBtnLink=''
                twoButtons='true'
             
            />
                 <Item
                title = 'Model S'
                desc = 'Order Online for Touchless Delivery'
                descLink = ''
                backgroundImg = {SolarRoof}
                leftBtnTxt = 'Custom Order'
                leftBtnLink =''
                rightBtnTxt='Existing Inventory'
                rightBtnLink=''
                twoButtons='true'
             
            />
                 <Item
                title = 'Model S'
                desc = 'Order Online for Touchless Delivery'
                descLink = ''
                backgroundImg = {SolarPanels}
                leftBtnTxt = 'Custom Order'
                leftBtnLink =''
                rightBtnTxt='Existing Inventory'
                rightBtnLink=''
                twoButtons='true'
             
            />
                 <Item
                title = 'Model S'
                desc = 'Order Online for Touchless Delivery'
                descLink = ''
                backgroundImg = {Accessories}
                leftBtnTxt = 'Custom Order'
                leftBtnLink =''
                rightBtnTxt='Existing Inventory'
                rightBtnLink=''
          
             
            />

        </div>
  
    )
}

export default Items
