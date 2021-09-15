import React from 'react'
import head from './Img/head.png'
import './Landing.css'
function Landing() {
    return (
        <div>
               <div class="header container-fluid">
               <nav class="navbar navbar-expand-lg navbar-dark shadow-lg fixed-top "  id="navi">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link m-2" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link m-2 text-light " href="#">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link m-2 text-light " href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link m-2 text-light " href="#serv">Services</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          {/* <button class="btn  my-2 my-sm-0 text-dark" style={background-color:'#fff';} type="submit">Register</button> */}
        </form>
      </div>
    </nav>
      <div class="row">
        <div class="col-md-6 ">
          <div class="h1 heading  px-5 text-light">MAKE THE WORLD CREATIVE</div>
          <p class=" text-light px-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, ipsam!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti corporis autem non ducimus obcaecati, ex velit. Dignissimos, ipsa. Accusamus nulla facere quae libero commodi, debitis earum nobis saepe eum vitae!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, nostrum?
          </p>
          <div class="bt1 px-5">
          <button class="btn  shadow-lg m-3">Read More</button></div>
        </div>
        <div class="col-md-6  mt-5 text-center ">
          <img
            src={head}
            height="auto" class="  align-items-center mt-5" width="100%" alt=""/>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,176C320,192,400,256,480,272C560,288,640,256,720,229.3C800,203,880,181,960,197.3C1040,213,1120,267,1200,282.7C1280,299,1360,277,1400,266.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </div> 
        </div>
    )
}

export default Landing
