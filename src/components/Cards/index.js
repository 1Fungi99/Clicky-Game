import React from "react";
import "./style.css";

const CharacterCard = props => {
  return (
    <div className="card" onClick={() => props.onImgClick(props.id)}>
      <div className="card-img">
        <img
          alt={props.name + " Image"}
          src={props.image}
          className="cardImg"
        ></img>
      </div>
    </div>
  );
};

export default CharacterCard;
