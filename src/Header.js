import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
    return (
        <div className='header'>
        <img 
        className="header_logo" src="images.png"/>
        <div
        className="header_search">
        <input
        className="header_searchInput"
        type="text" />

<SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav" >

        <div className='header_option'>
        <span className='header_OptionLineOne'>Hello Guest</span>
        <span className='header_OptionLineTwo'>Sign In</span>
        </div>

        <div className='header_option'>
        <span className='header_OptionLineOne'>Return</span>
        <span className='header_OptionLineTwo'>& Orders</span>
        </div>


                        <div className='header_option'>
                    <span className='header_OptionLineOne'> Your</span>
                    <span className='header_OptionLineTwo'> Prime</span>
                </div>

        <div className="header_optionBasket">
        <ShoppingBasketIcon />
        <span className='header_OptionLineTwo
        header_basketCount'>0</span>
        </div>




        </div>
        </div>



                )
}

export default Header
