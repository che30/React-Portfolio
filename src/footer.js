import React from "react";
import './Footer.css'
const Footer = () =>{
    return(
        <footer>
           <div className="mx-auto footer py-3">
           <div><span><i class="fa fa-send-o mr-2" id="contact"></i></span> <span className="font">che.blancoo58@gmail.com</span> </div>
            <div className="d-flex footer__social__icons">
                <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/che30"><i className="fa fa-github "></i></a></div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/che55085128"><i className="fa fa-twitter"></i></a></div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cheblanchard/"><i className="fa fa-linkedin"></i></a></div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://angel.co/u/che-nsoh"><i className="fa fa-angellist"></i></a></div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://che-blancoo58.medium.com/"><i className="fa fa-medium"></i></a></div>
            </div>
            <div className="microverse font-Nunito-light">2021 Microverse</div>
           </div>
        </footer>
    )

}
export default Footer