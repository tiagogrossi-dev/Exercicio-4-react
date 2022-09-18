import { Link } from "react-router-dom";
import * as Styles from "../styles";
import { useDispatch } from "react-redux";
import { addMovie } from "../actions/playlist";

export function Movie({ movieId, movieTitle, overview }) {
	
	const dispatcher = useDispatch();

	return (
		<Styles.MovieContainer>
			<h3>
				<Link to={`/movie/${movieId}`}>{movieTitle}</Link>
			</h3>
			<p className="movie-overview">{overview}</p>
			<button
                onClick={() => dispatcher(addMovie({ movieTitle, overview}))}
                >
                    Add to Playlist
                </button>
		</Styles.MovieContainer>
	)
}