import React from 'react'
const Navbar = () =>{
    return(
        <div className="yosha">
        <nav className="nav-wrapper transparent">
        <div className="container">
        <a href="#" className="brand-logo ">SMS</a>
        <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down ">
        <li><a href="#" className="navlinks btn waves-effect ">Home</a></li>
        <li><a href="#" className="navlinks btn waves-effect ">Stats</a></li>
        <li><a href="#" className="navlinks btn waves-effect ">About</a></li>
        <li><a href="#" className="navlinks btn waves-effect ">Contact Us</a></li>
        </ul>
        <ul  id="mobile-links" className="sidenav" >
        <li><a href="#">Home</a></li>
        <li><a href="#">Stats</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
        </ul>
        </div>
        </nav>
        </div>

    
    )

}


export default Navbar;