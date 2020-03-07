import React from "react";
import data from "../data/portfolio.json";

var thumbnailStyle = {
  overflow: "hidden",
  margin: "0 auto"
};

const Thumbnails = props => {
  //if (!tile.screenshots) return <div></div>;
  try {
    return (
      <div>
        <ol className="carousel-indicators" style={thumbnailStyle}>
          {props.tile.screenshots.map((thumb, index) => {
            return (
              <li
                key={thumb.id}
                className="p-2 bd-highlight"
                data-target="#carouselScreenshots"
                data-slide-to={index}
                style={{ cursor: "pointer" }}
              >
                <div className="thumbnail border border-primary">
                  <img
                    src={props.tile.basePath + "/" + thumb.image}
                    className="d-block roundedg"
                    alt="..."
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <h1>{error}</h1>;
  }
};

export class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    var tile = data.find(x => {
      return x.id === this.props.state.projectId;
    });
    return (
      <span>
        <div className="modal display-block">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {tile.name}
            </h5>
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              onClick={this.props.toggleShow.bind(this, 0)}
            >
              Close
            </button>
          </div>
          <div className="modal-body">
            <div className="bd-example">
              <div
                id="carouselScreenshots"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner border border-light">
                  {tile.screenshots.map(function(ss, index) {
                    var cls =
                      index === 0
                        ? "screenshot-spacing carousel-item active"
                        : "screenshot-spacing carousel-item";
                    return (
                      <div className={cls} key={index}>
                        <img
                          src={tile.basePath + "/" + ss.image}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Thumbnails tile={tile} />
          </div>
        </div>
      </span>
    );
  }
}

export default Modal;
