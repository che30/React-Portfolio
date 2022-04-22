import React from "react";
import './Myskills.css'
const Myskills = () =>{
    return(
        <div className="mt-5">
        <h4 className="my__skills__header text-center font-Nunito-bold">My skills</h4>
        <div className="container">
            <div className="row skills__container justify-content-center">
                <div className="col-12 col-md-3 col-lg-3">
                <ul className="bg-lgrey rounded sameWidth"  >
                <li className="list-unstyled skillsHeading  font-Nunito-bold">Frameworks</li>
                <li>Rails</li>
                <li>Django</li>
                <li>Bootstrap</li>
                <li>Rspec</li>
                <li>Capybara</li>
                <li>React</li>
                <li>Redux</li>
                </ul>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                <ul className="bg-lgreyone sameWidth">
                <li className="list-unstyled skillsHeading  font-Nunito-bold"> Languages</li>
                <li>Ruby</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>C</li>
                <li>HTML</li>
                <li>CSS</li>
                </ul>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                <ul className="bg-lgreytwo sameWidth">
                <li className="list-unstyled skillsHeading  font-Nunito-bold">Tech skills</li>
                <li>GitHub </li>
                <li>Collaborative</li>
                <li>Programming</li>
                <li>Terminal</li>
                </ul>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                <ul className="bg-lgreythree sameWidth">
                <li className="list-unstyled skillsHeading  font-Nunito-bold">Soft Skills</li>
                <li>Teamwork</li>
                <li>English fluency</li>
                <li>Problem-solving</li>
                <li>Patience</li>
                <li>Adaptability</li>
                <li>Indepent learning</li>
                </ul>
                </div>
            </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around skills__container align-content-center mt-5 ">
 
    
  </div>

        </div>
    )
} 
export default Myskills