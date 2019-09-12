import React from "react";
import data from "../data/portfolio.json";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, Typography, Modal } from "@material-ui/core";
import Project from "./Project";

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

const Portfolio = props => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [projectId, setProjectId] = React.useState(0);

  const handleOpen = props => {
    setProjectId(props);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <h2>Portfolio</h2>
      <div className="row">
        {data.map(tile => (
          <div key={tile.id} className="col-6">
            <div className="card">
              <div className="card-image">
                <div className="overlay">
                  <a href="#" class="icon" title="User Profile">
                    <i class="fa fa-user"></i>
                  </a>
                </div>
                <img
                  src={tile.basePath + "/" + tile.preview}
                  className="card-img-top"
                  alt="..."
                />
              </div>

              <div className="card-body">
                <p className="card-text">{tile.name}</p>
              </div>
            </div>
            <button type="button" onClick={() => handleOpen(tile.id)}>
              Open Modal
            </button>
          </div>
        ))}
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <button type="button" onClick={handleClose}>
            close
          </button>
          <Project id={projectId} />
        </div>
      </Modal>
    </div>
  );
};

const useStyles = makeStyles(theme => ({}));

export default Portfolio;
