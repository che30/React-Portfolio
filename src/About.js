import React from "react";
import './About.css'
// import image from './assets/images/image.png'
const About = () =>{
return(
    <div>
     <div className="abt__parent_section">
        <div className="abt__section">
            <h1 className="text-white header__one">Hi! I'm CHE NSOH </h1>
            <h2 className="full__stack header__two">A Full-stack Developer</h2>
            <p className="header__three">I can help you build a product, feature or website. Look through 
                some of my work and experiences.
                 If you like what you see and have a project you want
                coded don't hesitate to contact me. I am always ready to learn
                 feel free to give me any challenge.</p>
            <div className="bg-orange d-flex ">
                <p >Feel free to check my work on social media</p>
                <div className="d-flex">
                    <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/che30"><i className="fa fa-github"></i></a></div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/che55085128"><i className="fa fa-twitter"></i></a></div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cheblanchard/"><i className="fa fa-linkedin"></i></a></div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://angel.co/u/che-nsoh"><i className="fa fa-angellist"></i></a></div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://che-blancoo58.medium.com/"><i className="fa fa-medium"></i></a></div>
                </div>
            </div>
           </div>
     </div>

    </div>
)
}
export default About