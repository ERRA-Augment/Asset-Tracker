import React from 'react'
import ".././css/images.css"
import { imagestore } from "../images.js"

function Logo() {
    return (
        <div className="logo">
            {imagestore.logo}
        </div>
    )
}

export default Logo
