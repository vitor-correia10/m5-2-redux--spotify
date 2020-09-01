const initialState = {
    currentArtist: null,
    status: 'loading',
};

export default function Artists(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}