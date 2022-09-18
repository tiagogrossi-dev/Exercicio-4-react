import { CLEAR_PLAYLIST, SET_MOVIE } from "../actions/playlist";

const initialState = {
    movies: [],
};

export function playlist(state = initialState, action){
    switch(action.type){
        case SET_MOVIE:
            return{
                ...state,
                movies: state.movies.concat(action.payload),
            };
        case CLEAR_PLAYLIST:
            return{
                ...state,
                movies: []
            }
        
        default:
            return state;
    }
}