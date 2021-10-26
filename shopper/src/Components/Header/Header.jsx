import React from 'react'
import ReactDOM from 'react-dom'
import './Header.css'
import logo from './logo.png'
import SearchIcon from '@material-ui/icons/Search';
import {MdSearch} from 'react-icons/md'
import {AiOutlineShoppingCart} from 'react-icons/ai'
function Header() {
    return (
        <div className='header'>
            <img 
            className='header_logo'
            src={logo}/>
            
            <div className='header_search'>
                
                <input className='header_searchInput' type='text'/>
                <MdSearch className='SearchIcon'/>
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
                <span className= 'header_optionLineTwo'> Membership</span> 
                
                </div>

                <div className='header_option_Basket'>
                <AiOutlineShoppingCart/>
                <span className="header_optionLineTwo
                header_basketCount">0</span>
                </div>
            </div>
        </div>
    
    )
}

export default Header
