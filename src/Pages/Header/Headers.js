import React from 'react';

import './App.css';



function Headers(props) {
  return (

    <div>

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" />
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner" />
      <div className="carousel-item active">
        <img src="./img1.jpg" class="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" />
      <img src="" class="d-block w-100" alt="..." />

      <div className="carousel-item">
        <img src="./img/2.png" class="d-block w-100" alt="..." />


        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );

}

export default Headers;