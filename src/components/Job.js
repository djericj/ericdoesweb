import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 15
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  dates: { width: 120, margin: "auto" }
}));

const Job = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item className={classes.dates}>
            <Dates from={props.from} to={props.to} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <JobTitle
                  title={props.title}
                  subtitle={props.subtitle}
                  environment={props.environment}
                />
              </Grid>
              <Grid item>
                <ResponsibilitiesPanel
                  classes={classes}
                  description={props.description}
                />
              </Grid>
            </Grid>
            <Grid item>
              <ImageButton
                classes={classes}
                alt={props.alt}
                image={props.image}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const Dates = props => {
  return (
    <div>
      <Typography variant="h5">{props.from}</Typography>
      <Typography variant="h6"> - </Typography>
      <Typography variant="h5">{props.to}</Typography>
    </div>
  );
};

const JobTitle = props => {
  return (
    <div>
      <Typography gutterBottom variant="subtitle1">
        <strong>{props.title}</strong>
      </Typography>
      <Typography variant="body2" gutterBottom>
        {props.subtitle}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {props.environment}
      </Typography>
    </div>
  );
};

const ResponsibilitiesPanel = props => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <ExpansionPanel
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={props.classes.heading}>
          Responsibilities
        </Typography>
        <Typography className={props.classes.secondaryHeading}>
          click to expand
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ul>
          {props.description.map(data => {
            return <li>{data.item}</li>;
          })}
        </ul>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const ImageButton = props => {
  return (
    <ButtonBase className={props.classes.image}>
      <img className={props.classes.img} alt={props.alt} src={props.image} />
    </ButtonBase>
  );
};

export default Job;
