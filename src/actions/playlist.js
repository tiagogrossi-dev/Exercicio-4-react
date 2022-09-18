export const SET_MOVIE = "SET_MOVIE";
export const CLEAR_PLAYLIST = "CLEAR_PLAYLIST";

export const addMovie = (movie) =>({
    type: SET_MOVIE,
    payload: movie,
});

export const clearPlaylist = () => ({
    type: CLEAR_PLAYLIST
})