export const requestAccessToken = () => ({
    type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = token => ({
    type: "RECEIVE_ACCESS_TOKEN",
    token,
});

export const receiveAccessTokenError = () => ({
    type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

export const receiveSuccessfulData = () => ({
    type: "RECEIVE_ALL_DATA",
});

export const receiveArtistData = json => ({
    type: 'RECEIVE_ARTIST_DATA',
    artist: json,
});

export const receiveDataERROR = () => ({
    type: "RECEIVE_DATA_ERROR",
});

