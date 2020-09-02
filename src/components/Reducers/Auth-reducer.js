const initialState = {
    token: null,
    status: "idle",
};

export default function Auth(state = initialState, action) {
    console.log('Auth', state)
    switch (action.type) {
        case 'REQUEST_ACCESS_TOKEN': {
            return {
                ...state,
                status: 'loading',
            };
        }

        case 'RECEIVE_ACCESS_TOKEN': {
            return {
                ...state,
                token: action.token,
                status: 'idle',
            };
        }

        case 'RECEIVE_ACCESS_TOKEN_ERROR': {
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