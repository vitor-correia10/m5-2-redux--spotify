import React from 'react';

import { useDispatch } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from '../../Actions';

import ArtistRoute from '../ArtistRoute';

import GlobalStyles from '../GlobalStyles';

const DEFAULT_ARTIST_ID = '6eUKZXaKkcviH0Ku9w2n3V';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestAccessToken());

    const fetchArtists = async () => {
      try {
        const response = await fetch('/spotify_access_token');
        const data = await response.json();

        dispatch(receiveAccessToken(data.access_token));

      } catch (err) {
        dispatch(receiveAccessTokenError());
        console.log(err);
      }
    }
    fetchArtists();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/artists/${DEFAULT_ARTIST_ID}" />
        </Route>
        <Route path="/artists/:artistId">
          <ArtistRoute />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
};

export default App;
