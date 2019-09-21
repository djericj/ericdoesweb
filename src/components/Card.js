import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img
        src={props.tile.basePath + "/" + props.tile.preview}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body" style={{ cursor: "pointer" }}>
        <h5 className="card-title text-dark">{props.tile.name}</h5>
        <p className="card-text text-dark font-weight-normal">
          {props.tile.technologies}
        </p>
        <a
          data-project={props.tile.id}
          className="stretched-link"
          onClick={props.toggleShow.bind(this, props.tile.id)}
        ></a>
      </div>
    </div>
  );
};

export default Card;
