import React, { useState } from "react";
import data from "../data/portfolio.json";
import Card from "./Card";
import Modal from "./Modal";
import { ErrorBoundary } from "./ErrorBoundary.js";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    width: `98%`,
    height: `98%`,
    transform: `translate(-${top}%, -${left}%)`,
    overflow: "scroll"
  };
}

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, projectId: 0 };
  }

  toggleShow = id => {
    this.setState(state => ({ show: !state.show, projectId: id }));
    console.log(id);
  };

  render() {
    return (
      <div>
        <div className="card-columns padding-lg">
          {data.map(tile => (
            <div key={tile.name}>
              <Card
                tile={tile}
                toggleShow={this.toggleShow}
                state={this.state}
              />
            </div>
          ))}
        </div>
        <ErrorBoundary>
          <Modal
            show={this.state.show}
            toggleShow={this.toggleShow}
            state={this.state}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Portfolio;
