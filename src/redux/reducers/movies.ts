
const initialState = {
    list: []
};

const movies = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return {
                ...state,
                list: action.payload 
            };
        default:
            return state;
    }
}

export default movies;