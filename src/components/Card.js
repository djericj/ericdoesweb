import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img
        src={props.tile.basePath + "/" + props.tile.preview}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-dark">{props.tile.name}</h5>
        <p className="card-text text-dark">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          data-project={props.tile.id}
          className="btn btn-primary stretched-link"
          onClick={props.toggleShow.bind(this, props.tile.id)}
        >
          More screenshots
        </button>
      </div>
    </div>
  );
};

export default Card;
