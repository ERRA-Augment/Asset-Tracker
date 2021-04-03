import React from 'react'
import ".././css/MainBody.css"
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Stocks from './Stocks';

function MainBody() {
    return (
        <div className="mainbody">
            
            <Header />
            <Sidebar />
            <Stocks />
            <Footer />
            
       </div>
    )
}

export default MainBody
