import React from "react";
import { Grid, Paper, Button, Container, Typography } from "@material-ui/core";
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
