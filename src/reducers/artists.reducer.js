import produce from 'immer';

const initialState = {
  currentArtist: null,
  status: 'idle',
  error: null,
};

/*
The 'type' for current artist will look like this:

{
  id: 'abc123',
  profile: {
    name: 'deadmau5',
    avatar: 'https://image.spotify.com/some-url.jpg',
    followerCount: 2500000,
    tags: ['big room', 'progressive house'],
  },
  topTracks: TBD,
  relatedArtists: TBD
}

*/

export default function artists(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ALL_ARTIST_INFO': {
      return {
        ...state,
        status: 'loading',
      };
    }

    case 'RECEIVE_ARTIST_PROFILE': {
      return produce(state, draftState => {
        if (!draftState.currentArtist) {
          draftState.currentArtist = {};
        }

        draftState.currentArtist.id = action.profile.id;
        draftState.currentArtist.profile = action.profile;
      });
    }

    case 'RECEIVE_RELATED_ARTISTS': {
      return produce(state, draftState => {
        if (!draftState.currentArtist) {
          draftState.currentArtist = {};
        }

        draftState.currentArtist.relatedArtists = action.relatedArtists;
      });
    }

    case 'RECEIVE_TOP_TRACKS': {
      return produce(state, draftState => {
        if (!draftState.currentArtist) {
          draftState.currentArtist = {};
        }

        draftState.currentArtist.topTracks = action.topTracks;
      });
    }

    case 'RECEIVE_ARTIST_ERROR': {
      return {
        ...state,
        status: 'error',
      };
    }

    case 'FINISH_RECEIVING_ALL_ARTIST_INFO': {
      return {
        ...state,
        status: 'idle',
      };
    }

    default: {
      return state;
    }
  }
}

export const getArtist = state =>
  console.log('seect', state.artists.currentArtist) ||
  state.artists.currentArtist;
export const getArtistStatus = state => state.artists.status;
