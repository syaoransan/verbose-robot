import React from 'react'
import './Item.css'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const twoBtnCheck = (twoButtons, rightBtnTxt, rightBtnLink) => {
    if (twoButtons){
        <Button imp= 'secondary' txt={rightBtnTxt} link={rightBtnLink} /> 
    } 
}


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
                        <div className='item' style = {{backgroundImage : `url(${backgroundImg})`}}>           
                            <div className='item-title'>
                                <div>  { title } </div>
                                <p> { desc }</p>           
                            </div>
                            <div className='item-buttons'>
                                <Button imp='primary' text={leftBtnTxt} link={leftBtnLink}/>
                                {
                                 twoButtons && (<Button imp='secondary' text={rightBtnTxt} link={rightBtnLink}/>)
                                }
                            </div>

                            {
                                first && ( 
                                            <div className='first'>
                                                <ExpandMoreIcon/>
                                            </div>
                                    )
                            }
                           
                        </div>
                    )
}

export default Item
