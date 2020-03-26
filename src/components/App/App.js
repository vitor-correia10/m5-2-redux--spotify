import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import ArtistDetails from '../ArtistDetails';
import GlobalStyles from '../GlobalStyles/GlobalStyles';

const DEFAULT_ARTIST_ID = '2CIMQHirSU0MQqyYHq0eOx';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/artist/:artistId">
          <ArtistDetails />
        </Route>
        {/* <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} /> */}
      </Switch>
      <GlobalStyles />
    </Router>
  );
};

export default App;
