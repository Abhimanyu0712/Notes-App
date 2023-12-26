import React from 'react';
import logo from './Images/logo.png'
const Header = () =>{
   return(
    <>
      <div className="header">
        <img className="imglogo"src={logo} alt="logo" width="60" height='60'/>
        <h1 className='AppHeading'>NOTES</h1>
      </div>
    </>
   )
} 
export default Header;