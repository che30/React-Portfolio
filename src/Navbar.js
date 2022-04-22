import React from "react";
import './Navbar.css';
const Navbar = ()=>{
    return(
        <nav>
            <div className="d-flex parent_div_nav py-2">
                <div className="cnb">CNB</div>
                <div className="d-flex justify-content-around nav__top__right__width">
                    {/* <div className="d-none d-md-block d-lg-block">Home</div> */}
                    <div><a className="text-decoration-none" href="#projects">Projects</a></div>
                    <div> <a href="#atbme" className="text-decoration-none">About</a></div>
                    <div><a href="#contact" className="text-decoration-none">Contact</a></div>
                </div>
            </div>
        </nav>)
}
export default Navbar