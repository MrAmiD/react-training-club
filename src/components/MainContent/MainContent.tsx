import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

export type MainContentProps = {};

const MainContent: React.FC<MainContentProps> = props => {
  return (
    <Grid container>
      <Grid item sm>
        MainContent
      </Grid>
      <Grid item sm>
        <Button variant="contained" color="primary">
          ReactTraining Club
        </Button>
      </Grid>
    </Grid>
  );
};

export default MainContent;
