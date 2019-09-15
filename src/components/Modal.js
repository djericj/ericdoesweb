import React from "react";
import data from "../data/portfolio.json";

export class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    var tile = data.find(x => {
      return x.id === this.props.state.projectId;
    });
    console.log(tile);
    return (
      <span>
        <div className="modal display-block">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {tile.name}
            </h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.props.toggleShow.bind(this, 0)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{tile.description}</p>
            <div class="bd-example">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  {tile.screenshots.map(function(ss, index) {
                    var cls = index === 0 ? "active" : "";
                    return (
                      <li
                        data-target={"carousel=" + { index }}
                        data-slide-to={index}
                        class={cls}
                      ></li>
                    );
                  })}
                </ol>
                <div class="carousel-inner">
                  {tile.screenshots.map(function(ss, index) {
                    var cls =
                      index === 0 ? "carousel-item active" : "carousel-item";
                    return (
                      <div class={cls}>
                        <img
                          src={tile.basePath + "/" + ss.image}
                          class="d-block w-100"
                          alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                          {/* <h5>First slide label</h5> */}
                          <p>{ss.caption}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.toggleShow.bind(this, 0)}
            >
              Close
            </button>
          </div>
        </div>
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
