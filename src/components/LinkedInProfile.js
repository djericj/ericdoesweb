import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as LinkedInIcon } from "../_ionicons_svg_logo-linkedin.svg";

const LinkedInProfile = props => {
  return (
    <Paper className={props.classes.paper}>
      <Grid container>
        <Grid item xs={3}>
          <LinkedInIcon fontSize="large" />
        </Grid>
        <Grid item xs={9}>
          <Typography>
            My profile on <strong>LinkedIn</strong>
          </Typography>
          <div>
            <Container>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={props.classes.button}
              >
                Find me on LinkedIn
              </Button>
            </Container>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LinkedInProfile;
