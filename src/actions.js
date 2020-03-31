import {
  fetchRelatedArtists,
  fetchSearchResults,
  fetchArtistProfile,
  fetchTopTracks,
} from './helpers/api.helpers';
import { getAccessToken } from './reducers/auth.reducer';

export const requestAccessToken = () => ({
  type: 'REQUEST_ACCESS_TOKEN',
});

export const receiveAccessToken = token => ({
  type: 'RECEIVE_ACCESS_TOKEN',
  token,
});

export const receiveAccessTokenError = () => ({
  type: 'RECEIVE_ACCESS_TOKEN_ERROR',
});

export const fetchAccessToken = dispatch => {
  dispatch(requestAccessToken());

  fetch('/spotify_access_token')
    .then(res => res.json())
    .then(json => {
      dispatch(receiveAccessToken(json.access_token));
    })
    .catch(err => {
      console.error(err);
      dispatch(receiveAccessTokenError());
    });
};

export const requestAllArtistInfo = () => ({
  type: 'REQUEST_ALL_ARTIST_INFO',
});
export const receiveArtistProfile = json => ({
  type: 'RECEIVE_ARTIST_PROFILE',
  profile: json,
});
export const receiveRelatedArtists = json => ({
  type: 'RECEIVE_RELATED_ARTISTS',
  relatedArtists: json.artists,
});
export const receiveTopTracks = json => ({
  type: 'RECEIVE_TOP_TRACKS',
  topTracks: json.tracks,
});
export const finishReceivingAllArtistInfo = () => ({
  type: 'FINISH_RECEIVING_ALL_ARTIST_INFO',
});
export const receiveArtistError = () => ({
  type: 'RECEIVE_ARTIST_ERROR',
});

export const fetchArtistPageDetails = artistId => (dispatch, getState) => {
  // We have a lot of things we'll need to fetch simultaneously
  const state = getState();
  const accessToken = getAccessToken(state);

  dispatch(requestAllArtistInfo());

  const artistProfilePromise = fetchArtistProfile(accessToken, artistId).then(
    json => {
      dispatch(receiveArtistProfile(json));
    }
  );

  const relatedArtistsPromise = fetchRelatedArtists(accessToken, artistId).then(
    json => {
      dispatch(receiveRelatedArtists(json));
    }
  );

  const topTracksPromise = fetchTopTracks(accessToken, artistId).then(json => {
    dispatch(receiveTopTracks(json));
  });

  Promise.all([artistProfilePromise, relatedArtistsPromise, topTracksPromise])
    .then(() => dispatch(finishReceivingAllArtistInfo()))
    .catch(err => {
      console.error(err);
      dispatch(receiveArtistError(err));
    });
};
