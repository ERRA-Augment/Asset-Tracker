import React from 'react'
import ".././css/logo.css"
import { imagestore } from "../images.js"

function Logo() {
    return (
        <div className="logo">
            {imagestore.logo}
        </div>
    )
}

export default Logo
