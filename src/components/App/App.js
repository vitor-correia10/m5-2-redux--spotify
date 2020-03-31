import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { fetchAccessToken } from '../../actions';

import ArtistRoute from '../ArtistRoute';
import MaxWidthWrapper from '../MaxWidthWrapper';
import GlobalStyles from '../GlobalStyles';

const DEFAULT_ARTIST_ID = '2CIMQHirSU0MQqyYHq0eOx';

const App = () => {
  const dispatch = useDispatch();

  // On mount, fetch the access token
  React.useEffect(() => {
    dispatch(fetchAccessToken);
  }, []);

  return (
    <Router>
      <MaxWidthWrapper>
        <Switch>
          <Route path="/artist/:artistId">
            <ArtistRoute />
          </Route>
          <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
        </Switch>
      </MaxWidthWrapper>
      <GlobalStyles />
    </Router>
  );
};

export default App;
