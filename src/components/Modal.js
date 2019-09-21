import React from "react";
import data from "../data/portfolio.json";
import { ErrorBoundary } from "./ErrorBoundary.js";

var thumbnailStyle = {
  overflow: "hidden",
  width: "96%",
  margin: "0 auto",
  height: "120px"
};

const Thumbnails = props => {
  //if (!tile.screenshots) return <div></div>;
  try {
    return (
      <div>
        <ol
          className="list-unstyled d-flex flex-row bd-highlight mb-3 carousel-indicators"
          style={thumbnailStyle}
        >
          {props.tile.screenshots.map((thumb, index) => {
            var cls = index === 0 ? "active" : "";

            return (
              <li
                key={thumb.id}
                className="p-2 bd-highlight"
                data-target="#carouselScreenshots"
                data-slide-to={index}
                className={cls}
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
        <ErrorBoundary>
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
                  <Thumbnails tile={tile} />

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
                  {/* <a
                    className="carousel-control-prev"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <p>{tile.description}</p>
              {/* <button
                type="button"
                className="btn btn-secondary"
                onClick={this.props.toggleShow.bind(this, 0)}
              >
                Close
              </button> */}
            </div>
          </div>
        </ErrorBoundary>
      </span>
    );
  }
}

const ModalHeader = ({ handleClose, tile }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">
        New message
      </h5>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={handleClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

const ModalBody = ({ tile }) => {
  return (
    <div className="modal-body">
      <h2>Body </h2>
    </div>
  );
};

const ModalFooter = ({ handleClose }) => {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default Modal;
