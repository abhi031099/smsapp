import React from 'react'

const About = () =>{
    return(
        <div className="parallax-container scrollspy" id="about">
            <h3 className="white-text center">About</h3>
            <div className="container">
            <p className="white-text">Our primary objective is to protect sewage workers from the danger of poisonous sewage gases, main constituents of these gases include methane, carbon dioxide, and hydrogen sulfide. One of the gases that are highest among all is methane gas</p>
            <p className="white-text">The user would be able to view the data on a simple webapp which will provide the current status of the sewer so that the authorities can act according to that data.The webapp also includes a form through which the user can contact the team if they face any kind of problem.</p>
            <div className="row">
                <div className="col"><h6 className="white-text left ">Links:</h6></div>
                <div className="col "><h6><a href="https://github.com/abhi031099/smsapp"><i className="white-text">https://github.com/abhi031099/smsapp</i></a></h6></div>
                <div className="col"><h6><a href="https://github.com/AakashKumar21/Sewage-Monitoring-System"><i className="white-text">https://github.com/AakashKumar21/Sewage-Monitoring-System</i></a></h6></div>

            </div>
            
                </div>
            </div>



    )
}

export default About;