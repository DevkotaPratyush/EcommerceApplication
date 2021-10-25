import React from 'react'
import './Header.css'
import logo from './logo.png'
function Header() {
    return (
        <div className='header'>
            <img 
            className='header_logo'
            src={logo}/>
            
            <div
            className='header_search'>
                <input
                className='header_searchInput'
                type='text'
                />
            </div>

            <div className='header_nav'>

                <div className='header_option'>
                    <span className= 'header_optionLineOne'> Hello Guest</span>
                    <span className= 'header_optionLineTwo'> Sign In</span>
                </div>

                <div className='header_option'>
                <span className= 'header_optionLineOne'> Order</span>
                <span className= 'header_optionLineTwo'> History</span>
                </div>
                
                <div className='header_option'>
                <span className= 'header_optionLineOne'> Your</span>
                <span className= 'header_optionLineTwo'> Membership</span>                   <span className= 'header_optionLineThree'> Hello Guest</span>
                </div>

            </div>
        </div>
    
    )
}

export default Header
