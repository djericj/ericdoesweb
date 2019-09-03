import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const ContentBox = props => {
  return (
    <Paper className={props.classes.paper}>
      <Box spacing={2} width={props.width} height={props.height}>
        <Grid item xs="{1}">
          {props.icon}
        </Grid>
        <Grid item xs="{8}">
          <Typography variant="h5">{props.title}</Typography>
        </Grid>
      </Box>

      <Box>{props.content}</Box>
    </Paper>
  );
};

export default ContentBox;
