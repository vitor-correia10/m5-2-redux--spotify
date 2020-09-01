const initialState = {
    token: null,
    status: "idle",
};

export default function Auth(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}