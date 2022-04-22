import React from "react";
import collegeApp from './assets/images/collegeApp.png'
import apiApp from './assets/images/apiapp.png'
import sm5 from './assets/images/sm5.jpg'
import movieCatalogue from './assets/images/movieCatalogue.png'
import onlineshop from './assets/images/onlineshop.png'
import todoApp from './assets/images/todoApp.png'
import rorscaffold from './assets/images/rorscaffold.png'
import './Project.css'
const Projects = () =>{
    return(
    <div>
         <div className="project__five">
         <h4 className="text-center font-Nunito-bold my__projects" id="projects">Projects</h4>
      <div className="projects__container__one">
            <img className="image__one" src={onlineshop} alt="collegemanagement system" />
        </div>
        <div className="mt-2">
            <div className="text-center apps">
            <h5 className="font-Nunito-bold">Online shop</h5>
            <p className="font-Nunito-light">Responsive website for a fictional client.</p>
            </div>
             <div className="d-flex frameworks">
                <p className="bg-dark rounded text-white  font-Nunito-bold">Bootstrap</p>
                <p className="bg-dark rounded text-white  font-Nunito-bold">HTML5/CSS3</p>
             </div>
        </div>
        <div className="access__projects d-flex">
            <div className="text-white bg-primary rounded github"><a target="_blank" rel="noopener noreferrer"  className="text-decoration-none text-white"  href="https://github.com/che30/Capstone-Online-Shop-for-Musical-instruments/tree/feature" >Github</a></div>
            <div className="live__demo"> <a target="_blank" rel="noopener noreferrer"  className="text-decoration-none"  href="https://che30.github.io/Capstone-Online-Shop-for-Musical-instruments/">live demo</a></div>
        </div>
      </div>


      <div className="project__four">
      <div className="projects__container__one">
            <img className="image__one" src={movieCatalogue} alt="collegemanagement system" />
        </div>
        <div className="mt-2">
            <div className="text-center apps">
            <h5 className="font-Nunito-bold">Movie Database project.</h5>
            <p className="font-Nunito-light">Web project for a fictional company powered by <strong>The Open Movie Database API </strong> 
               Responsive accross mobile views </p>
            </div>
             <div className="d-flex frameworks">
                <p className="bg-dark rounded text-white font-Nunito-bold">React/Redux</p>
             </div>
        </div>
        <div className="access__projects d-flex">
            <div className="text-white bg-primary rounded github"><a target="_blank" rel="noopener noreferrer"  className="text-decoration-none text-white"  href="https://github.com/che30/Statistic-catalogue" >Github</a></div>
            <div className="live__demo"> <a target="_blank" rel="noopener noreferrer"  className="text-decoration-none"  href="https://chemoviecatalogue.herokuapp.com/">live demo</a></div>
        </div>
      </div>

      <div className="project__six">
      <div className="projects__container__one">
            <img className="image__one" src={todoApp} alt="collegemanagement system" />
        </div>
        <div className="mt-2">
            <div className="text-center apps">
            <h5 className="font-Nunito-bold">Todo</h5>
            <p className="font-Nunito-light">Show case of DOM using pure javascript
             <strong> Not responsive</strong> accross mobile views. </p>
            </div>
             <div className="d-flex frameworks">
                <p className="bg-dark rounded text-white  font-Nunito-bold">Javascript</p>
                <p className="bg-dark rounded text-white  font-Nunito-bold">HTML5/CSS3</p>
             </div>
        </div>
        <div className="access__projects d-flex">
            <div className="text-white bg-primary rounded github"><a target="_blank" rel="noopener noreferrer"  className="text-decoration-none text-white"  href="https://github.com/che30/TodoList/tree/feature" >Github</a></div>
            <div className="live__demo"> <a target="_blank" rel="noopener noreferrer"  className="text-decoration-none"  href="https://raw.githack.com/che30/TodoList/feature/dist/index.html">live demo</a></div>
        </div>
      </div>

      <div className="project__one">
      <div className="projects__container__one">
            <img className="image__one" src={collegeApp} alt="college management system" />
        </div>
        <div className="mt-2">
            <div className="text-center apps">
            <h5 className="font-Nunito-bold">College management Project</h5>
            <p className="font-Nunito-light">Self-proposed college management system.
             <strong> Not responsive</strong> accross mobile views </p>
            </div>
             <div className="d-flex frameworks">
                <p className="bg-dark rounded text-white font-Nunito-bold">Python</p>
                <p className="bg-dark rounded text-white  font-Nunito-bold">Django</p>
                <p className="bg-dark rounded text-white  font-Nunito-bold">HTML5/CSS3</p>
             </div>
        </div>
        <div className="access__projects d-flex">
            <div className="text-white bg-primary rounded github"><a target="_blank" rel="noopener noreferrer"  className="text-decoration-none text-white"  href="https://github.com/che30/manageschool/tree/feature" >Github</a></div>
            <div className="live__demo"> <a target="_blank" rel="noopener noreferrer"  className="text-decoration-none"  href="https://mycollegeschoolapp.herokuapp.com/">live demo</a></div>
        </div>
      </div>

      <div className="project__two">
      <div className="projects__container__one">
            <img className="image__one" src={rorscaffold} alt="Api app" />
        </div>
        <div className="mt-2">
            <div className="text-center apps">
            <h5 className="font-Nunito-bold">Stay In Touch</h5>
            <p className="font-Nunito-light">Small scale social media app users can register,
             send, accept and reject friendship. </p>
            </div>
             <div className="d-flex frameworks framework__two">
                <p className="bg-dark rounded text-white font-Nunito-bold">Ruby</p>
                <p className="bg-dark rounded text-white  font-Nunito-bold">Rails</p>
                <p className="bg-dark rounded text-white  font-Nunito-bold">HTML5/CSS3</p>
             </div>
        </div>
        <div className="access__projects d-flex">
            <div className="text-white bg-primary rounded github"><a target="_blank" rel="noopener noreferrer"  className="text-decoration-none text-white"  href="https://github.com/che30/ror-social-scaffold" >Github</a></div>
            <div className="live__demo"> <a target="_blank" rel="noopener noreferrer"  className="text-decoration-none"  href="https://still-brook-03186.herokuapp.com/users/sign_in">live demo</a></div>
        </div>
      </div>

      <div className="project__two">
      <div className="projects__container__one">
            <img className="image__one" src={apiApp} alt="Api app" />
        </div>
        <div className="mt-2">
            <div className="text-center apps">
            <h5 className="font-Nunito-bold">Web Api project</h5>
            <p className="font-Nunito-light">Book tracking progress app for a fictional company.
            Uses data from a REST API project built with Rails.
             Responsive across mobile views </p>
            </div>
             <div className="d-flex frameworks framework__two">
                <p className="bg-dark rounded text-white font-Nunito-bold">Ruby</p>
                <p className="bg-dark rounded text-white  font-Nunito-bold">Rails</p>
                <p className="bg-dark rounded text-white  font-Nunito-bold">HTML5/CSS3</p>
                <p className="bg-dark rounded text-white  font-Nunito-bold">React/Redux</p>
             </div>
        </div>
        <div className="access__projects d-flex">
            <div className="text-white bg-primary rounded github"><a target="_blank" rel="noopener noreferrer"  className="text-decoration-none text-white"  href="https://github.com/che30/readbooktraker/tree/apiv1" >Github</a></div>
            <div className="live__demo"> <a target="_blank" rel="noopener noreferrer"  className="text-decoration-none"  href="https://read-book-tracker-front-end.herokuapp.com/">live demo</a></div>
        </div>
      </div>


      <div className="project_three">
      <div className="projects__container__one">
        <iframe    src="https://replit.com/@chensoh/RubyTicTacToeProject?lite=true"></iframe>
        </div>
        <div className="mt-2">
            <div className="text-center apps">
            <h5 className="font-Nunito-bold">Tic-Tac-Toe Game</h5>
            <p className="font-Nunito-light">Command line project, emulating the classic game. <br/>
            Try it in the Console!</p>
            </div>
             <div className="d-flex frameworks">
                <p className="bg-dark rounded text-white  font-Nunito-bold">Ruby</p>
             </div>
        </div>
        <div className="access__projects d-flex">
            <div className="text-white bg-primary rounded github"><a target="_blank" rel="noopener noreferrer"  className="text-decoration-none text-white"  href="https://github.com/che30/RubyTicTacToeProject" >Github</a></div>
        </div>
      </div>
    </div>)
}
export default Projects