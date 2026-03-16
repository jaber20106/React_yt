import React from "react";

const Card = (props) => {
    console.log(props.price)
  return (
    <div className="card">

      <div className="card-top">
        <span className="rate">{props.price}</span>
        <span className="bookmark">🔖</span>
      </div>
  <h2 className="title">{props.title}</h2>

      <div className="arrow">→</div>

      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="card-footer">
        <div className="company">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="google"
          />
          <p>Senior Backend Engineer</p>
        </div>

        <button className="view-btn">View</button>
      </div>

    </div>
  );
};

export default Card;