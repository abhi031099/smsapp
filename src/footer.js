import React from 'react'

const Footer = () =>{
    return(
        <div className="ft">
        <footer className="page-footer teal">
            <div className="container">
                <div className="row">
                    <div className="col s8 l4">
                        <h4>SMS</h4>
                    </div>
                    <div className=" footnav col s4 l8 center ">
                        <ul>
                        <li><a href="#home"  >Home</a></li>
                        <li><a href="#stats"  >Stats</a></li>
                        <li><a href="#about" >About</a></li>
                        <li><a href="#contact" >Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container center-align">
                    <p>&copy;SMS 2020</p>
                </div>
            </div>
        </footer>
        </div>
    )
}
export default Footer;