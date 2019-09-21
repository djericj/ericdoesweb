import React from "react";
import data from "../data/portfolio.json";
import Card from "./Card";
import Modal from "./Modal";

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

        <Modal
          show={this.state.show}
          toggleShow={this.toggleShow}
          state={this.state}
        />
      </div>
    );
  }
}

export default Portfolio;
