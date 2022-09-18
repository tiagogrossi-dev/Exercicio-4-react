import { useDispatch } from "react-redux";
import { addFilm } from "../actions/playlist";

export function FilmItem({ filmTitle, overview }){
    const dispatcher = useDispatch();

    return(
        <div>
            <h3>{filmTitle}</h3>
            <h4>{overview}</h4>

            <button
                onClick={() => dispatcher(addFilm({ filmTitle, overview}))}
                >
                    Add to Playlist
                </button>
        </div>
    )
}