import React from 'react'
import ".././css/Header.css"
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
           
            {/* LOGO */}

            <HomeRoundedIcon id="homepage" />

            <ShowChartIcon id="assetoverview" />

            <AccountBalanceWalletIcon id="accountoverview" />

            <SearchIcon id="searchbutton" /> 

            <AccountBoxIcon id="loginbutton" />

            {/* TOTALVALUE */}

            {/* CRYPTOVALUE */}

            {/* FIATVALUE */}

            


            </div>
    )
}

export default Header
