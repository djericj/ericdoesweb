import React from "react";
import data from "../data/portfolio.json";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Paper,
  Typography,
  IconButton,
  Modal
} from "@material-ui/core";

let projectItem;

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: "relative"
  },
  img: {
    width: "100%"
  },
  caption: {
    margin: "0 auto",
    textAlign: "center"
  },
  gridList: {
    position: "relative",
    float: "left",
    width: "100%",
    minHeight: "400px",
    minWidth: "664px",
    overflow: "hidden",
    height: "100% !important"
  }
}));

const Project = props => {
  const classes = useStyles();
  const proj = data.filter(function(data) {
    return data.id === props.id;
  });
  projectItem = proj[0];
  return (
    <div className={classes.root}>
      <Typography variant="h3">{projectItem.name}</Typography>
      <Typography variant="subtitle1">{projectItem.technologies}</Typography>
      <p>{projectItem.description}</p>
      <Screenshots
        basePath={projectItem.basePath}
        data={projectItem.screenshots}
      />
    </div>
  );
};

const section = {
  height: "100%",
  paddingTop: 5,
  backgroundColor: "#fff"
};

const Screenshots = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [screenshotId, setScreenshotId] = React.useState(0);
  const handleOpen = props => {
    setScreenshotId(props);
    setOpen(true);
  };
  let index = 0;
  return (
    <div>
      {props.data.map(tile => {
        return (
          <Grid sm={12}>
            <div style={section} key={index++}>
              <Paper className={classes.paper} spacing={10}>
                <a href="#">
                  <img
                    src={props.basePath + "/" + tile.image}
                    alt={tile.caption}
                    className={classes.img}
                  />
                  <p className="caption">{tile.caption}</p>
                </a>
              </Paper>
            </div>
          </Grid>
        );
      })}
    </div>
    // <GridList className={classes.gridList}>
    //   {props.data.map(tile => (
    //     <img src={props.basePath + "/" + tile.image} alt={tile.caption} />

    //     // <GridListTile key={index++}>
    //     //   <img src={props.basePath + "/" + tile.image} alt={tile.caption} />

    //     //   <GridListTileBar
    //     //     title={tile.caption}
    //     //     actionIcon={
    //     //       <IconButton
    //     //         aria-label={`info about ${tile.caption}`}
    //     //         className={classes.icon}
    //     //       ></IconButton>
    //     //     }
    //     //   />
    //     // </GridListTile>
    //   ))}
    // </GridList>
  );
};

const ScreenshotModal = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <button type="button" onClick={handleClose}>
          close
        </button>
        {props.screenshotId}
      </div>
    </Modal>
  );
};

export default Project;
