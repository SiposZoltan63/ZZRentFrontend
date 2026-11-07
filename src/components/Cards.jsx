import React from 'react';
import "../App.css";

export default function Cards(props) {
  return (
    <div className="col-12 col-md-4 d-flex justify-content-center">
      <div className="card car-card w-100" style={{ maxWidth: "18rem" }}>
        <img src={props.src || ""} className="card-img-top" alt={props.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary mt-auto">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}