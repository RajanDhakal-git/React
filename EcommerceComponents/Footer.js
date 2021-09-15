import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div>
            <footer class="mt-5 text-light" data-aos="slide-up" id="foter">
      <div class="row p-4">
          <div class="col-md-3">
              <div class="border1 m-3">
                  <h4>Quick Links</h4>
                  <i class="fa fa-angle-right" aria-hidden="true"> <a href="" class="h5 ">Home</a></i><br/>
                  <i class="fa fa-angle-right" aria-hidden="true"> <a href="" class="h5 ">Services</a></i><br/>
                  <i class="fa fa-angle-right" aria-hidden="true"> <a href="" class="h5 ">Gallery</a></i><br/>
                  <i class="fa fa-angle-right" aria-hidden="true"> <a href="" class="h5 ">Pricing</a></i><br/>
                  <i class="fa fa-angle-right" aria-hidden="true"> <a href="" class="h5 ">Contact Us</a></i><br/>
              </div>
          </div>
          <div class="col-md-3">
              <div class="border1 m-3">
                  <h4>Contact Info</h4>
                  <i class="fa fa-phone" aria-hidden="true"></i>+977 9800000000 <br/>
                  <i class="fa fa-phone" aria-hidden="true"></i> +977 053 520420 <br/>
                  <i class="fas fa-envelope"></i> rajandhakal1234@email.com <br/>
                  <i class="fas fa-envelope"></i> rajandhakal678@gmail.com

              </div>
          </div>
          <div class="col-md-3">
              <div class="border1 m-3">
                  <h4>Follow US</h4>
                  <i class="fab fa-facebook"></i><a href="">Facebook</a><br/>
                  <i class="fab fa-instagram    "></i><a href="">Instagram</a><br/>
                  <i class="fab fa-twitter" aria-hidden="true"></i><a href="">Twitter</a>
              </div>
          </div>
          <div class="col-md-3">
              <div class="border1 m-3">
                  <h4>Download App</h4>
                  <i class="fab fa-windows"><a href="">Windows 10 </a></i><br/>
                  <i class="fab fa-apple"></i><a href="">App store </a><br/>
                  <i class="fab fa-google-play"></i><a href="">Play store</a>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="copy text-center">
              <h5 class="p-5 ">&copy;Copyright @2021 By <span class="hedline">Mr Rajan Dhakal</span></h5>
          </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
  </footer>
        </div>
    )
}
