import React from 'react'
import './Cards.css'
export default function Cards() {
    return (
        <div>
                <div class="services mt-5 container-fluid" data-aos="fade-in">
      <div class="h1 title text-center mt-5" data-aos="flip-down" ><span id="spans">O</span>ur Partners</div>
      <div class="row mt-5 bg-light ">
        <div class="col-md-4">
          <div class="card m-3 shadow-lg text-light p-3" data-aos="flip-down" id="car1">

            <h3 class="text-center">Title</h3>
            <p class="p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, adipisci!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse veritatis labore odio accusantium
              ea incidunt, sed iure? Impedit, aut.
            </p>
            <div class="mx-3 text-center px-3">
              <button class="btn text-dark  bg-light">Action</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-lg m-3 p-3" data-aos="flip-down">

            <h3 class="text-center">Title</h3>
            <p class="p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, adipisci!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse veritatis labore odio accusantium
              ea incidunt, sed iure? Impedit, aut.
            </p>
            <div class="mx-3 text-center">
              <button class="btn text-light bg-dark">Action</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-lg m-3  text-light p-3"  data-aos="flip-down" id="car1">
            <h3 class="text-center">Title</h3>
            <p class="p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, adipisci!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse veritatis labore odio accusantium
              ea incidunt, sed iure? Impedit, aut.
            </p>
            <div class="mx-3 text-center px-3">
              <button class="btn text-dark bg-light">Action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
