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
                    <div className="col s4 l8 center ">
                        <ul>
                            <li>Home</li>
                            <li>Stats</li>
                            <li>About</li>
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