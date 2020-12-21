import React from 'react'
const Navbar = () =>{
    return(
        <div className="yosha scrollspy" id="home">
        <nav className="nav-wrapper transparent">
        <div className="container">
        <a href="#home" className="brand-logo ">SMS</a>
        <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down ">
        <li><a href="#home" className="navlinks btn waves-effect ">Home</a></li>
        <li><a href="#stats" className="navlinks btn waves-effect ">Stats</a></li>
        <li><a href="#about" className="navlinks btn waves-effect ">About</a></li>
        <li><a href="#contact" className="navlinks btn waves-effect ">Contact Us</a></li>
        </ul>
        <ul  id="mobile-links" className="sidenav" >
        <li><a href="#home">Home</a></li>
        <li><a href="#stats">Stats</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
        </ul>
        </div>
        </nav>
        </div>

    
    )

}


export default Navbar;