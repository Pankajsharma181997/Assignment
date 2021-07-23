import React from "react";
import "./Carousel.css";
import data from "./data";

export default function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-multi-item"
      data-ride="carousel"
    >
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div class="carousel-inner" >
        <div class="carousel-item active">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-2">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-2">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" />
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg" />
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-2">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg" />
            </div>
          </div>

          <div class="col-md-4 clearfix d-none d-md-block">
            <div class="card mb-2">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg" />
            </div>
          </div>

          <div class="col-md-4 clearfix d-none d-md-block">
            <div class="card mb-2">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
