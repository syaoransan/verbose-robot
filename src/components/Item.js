import React from 'react'
import './Item.css'

const Item = () => {
    return (
        <div className='item' style={{}}>           
            <div className='item-title'>
                <h1> Title </h1>
                <p>Descriptions</p>
            </div>
            <div className='item-buttons'>
                Button
            </div>
        </div>
    )
}

export default Item
