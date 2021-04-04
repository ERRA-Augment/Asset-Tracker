import React from 'react'
import '.././css/navbuttons.css'


function NavButtons(props) {
    return (
        <div className='navbuttons__main'>
            <h2>{props.target}</h2>            
        </div>
    )
}

export default NavButtons
