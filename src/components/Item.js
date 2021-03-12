import React from 'react'
import './Item.css'



const Item = ({ title, 
                desc, 
                descLink, 
                backgroundImg, 
                leftBtnTxt, 
                leftBtnLink, 
                rightBtnTxt,
                rightBtnLink,
                twoButtons,
                first

                }) => {
                    return (
                        <div className='item' style = {{
                             backgroundImage : 'url('+ backgroundImg +')'
                        }}>           
                            <div className='item-title'>
                                <div>  { title } </div>
                                <p> { desc }</p>           
                            </div>
                            <div className='item-buttons'>
                                { leftBtnTxt }
                            </div>
                        </div>
                    )
}

export default Item
