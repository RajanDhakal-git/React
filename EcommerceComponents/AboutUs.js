import React from 'react'
import Book from './Img/book.svg'
import Rocket from './Img/rocket.svg'
export default function AboutUs() {
    return (
        <div>
            <div class="secondbody container-fluid" >
      <div class="h1 text-center"><span id="spans">A</span>bout Us</div>
      <div class="row">
        <div class="col-md-6" data-aos="slide-right">
          <div class="h3 my-2 p-3">What WE DO</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim numquam minus accusantium autem reiciendis
            earum delectus doloribus vel expedita nisi, perspiciatis voluptatum magnam, possimus deleniti consectetur
            cupiditate in minima necessitatibus?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolorem laudantium commodi quaerat
            voluptatem non voluptatibus nisi corrupti obcaecati, esse odit quasi doloribus incidunt deleniti amet ullam
            laborum corporis! Laboriosam?
          </p>
        </div>
        <div class="col-md-6"  data-aos="slide-left" >
          <img src={Book} width="100%"
            height="auto" alt=""/>
        </div>
      </div>
      <div class="row ">
        <div class="col-md-6 order-2 mt-5" data-aos="slide-right">
          <img src={Rocket} width="100%" height="auto"
            alt=""/>
        </div>
        <div class="col-md-6   order-1  order-md-3" data-aos="slide-left">
          <div class="h3 mt-5 p-3">Company</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim numquam minus accusantium autem reiciendis
            earum delectus doloribus vel expedita nisi, perspiciatis voluptatum magnam, possimus deleniti consectetur
            cupiditate in minima necessitatibus?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolorem laudantium commodi quaerat
            voluptatem non voluptatibus nisi corrupti obcaecati, esse odit quasi doloribus incidunt deleniti amet ullam
            laborum corporis! Laboriosam?
          </p>
        </div>
      </div>
    </div>
        </div>
    )
}
