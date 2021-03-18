export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQD__RkCKhDqFxqOK30ofiZ8gN79UM0_G1Gv-YaV5ZGih0tKC6J0rXGrvzZyntlc1kj6EqmmxX82Wy8Ze-KiEc5wRSdz9pDm5-pztRHQK2Tp_aw3M03whD6S94DjjkqweWimlq9xVDu2hOqoJfHYLPbL3tI47QUHXo7Y",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
};

export default reducer;