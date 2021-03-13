import React from 'react'
import './Button.css'

const btnWhite = (imp) => imp == 'secondary' ? 'button__white' : ''
const Button = ({imp, text, link}) => {

    return (
        <div className={'button '+ btnWhite(imp)}>
            <a href={link}> { text } </a>
        </div>
    )
}
export default Button
