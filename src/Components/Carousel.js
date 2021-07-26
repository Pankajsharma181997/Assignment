import React, { useState, useEffect } from "react";
import "./Carousel.css";
import axios from "axios";



export default function Carousel() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((response) => {
        console.log(response);
        setApiData(response.data);
        setLoading(false);
        console.log(apiData);
      })

      .catch((error) => {
        console.error("error fetching data");
      });
  }, []);

  return (
  

    <>
    {
        loading ? (
            <h2>loading ...</h2>
        ) : (
<div
        id="carouselExampleIndicators"
        class="carousel slide carousel-multi-item"
        data-ride="carousel"
        style={{ height: "400px", background: "black", marginTop: "100px" }}
      >
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
           <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>

        <div class="carousel-inner">
          {}
          <div class="carousel-item active first">
            <div class="row">
              <div class="col-md-1"></div>
             

              {
               
              apiData.slice(0, 5).map((item, index) => {
                return (
                  <div key={index} class="col-md-2">
                    <div class="card mb-2">
                      <img src={item.download_url} alt="..." />
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              <div class="col-md-1"></div>
              

              {apiData.slice(5, 10).map((item, index) => {
                return (
                  <div key={index} class="col-md-2">
                    <div class="card mb-2">
                      <img src={item.download_url} alt="..." />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="carousel-item">
            <div class="row" style={{ height: "300px" }}>
              <div class="col-md-1"></div>

              {apiData.slice(10, 15).map((item, index) => {
                return (
                  <div key={index} class="col-md-2">
                    <div class="card mb-2">
                      <img src={item.download_url} alt="..." />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="carousel-item">
            <div class="row" style={{ height: "300px" }}>
              <div class="col-md-1"></div>

              {apiData.slice(15, 20).map((item, index) => {
                return (
                  <div key={index} class="col-md-2">
                    <div class="card mb-2">
                      <img src={item.download_url} alt="..." />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="carousel-item">
            <div class="row" style={{ height: "300px" }}>
              <div class="col-md-1"></div>

              {apiData.slice(20, 25).map((item, index) => {
                return (
                  <div key={index} class="col-md-2">
                    <div class="card mb-2">
                      <img src={item.download_url} alt="..." />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="carousel-item">
            <div class="row" style={{ height: "300px" }}>
              <div class="col-md-1"></div>

              {apiData.slice(25, 30).map((item, index) => {
                return (
                  <div key={index} class="col-md-2">
                    <div class="card mb-2">
                      <img src={item.download_url} alt="..." />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

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
        </div>
      </div>

        )
    }
          </>
  );
}
