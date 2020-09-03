const initialState = {
    currentArtist: null,
    status: 'idle',
    error: null,
};

export default function Artists(state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_ALL_DATA': {
            return {
                ...state,
                status: 'loading',
            };
        }

        case 'RECEIVE_ARTIST_DATA': {
            console.log(action.artist)
            return {
                ...state,
                currentArtist: action.artist
            };
        }

        case 'RECEIVE_DATA_ERROR': {
            return {
                ...state,
                status: 'error',
            };
        }

        default: {
            return state;
        }
    }
}

export const getArtist = state => state.Artists.currentArtist;
export const getArtistStatus = state => state.Artists.status;