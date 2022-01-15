import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';

// import { SpeechState, useSpeechContext } from "@speechly/react-client";
// import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

// import { Details, Main } from './components';
import Details from './components/Details/Details';
import useStyles from './styles';

const App = () => {

  return (
    <div>
      <Grid container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          Main
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;