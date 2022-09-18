import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearPlaylist } from "../actions/playlist";
import { MoviesList } from "../components/MovieList";
import { useGetMovies } from "../hooks/useGetMovies";

export function Home() {
	const { movies } = useGetMovies();
	const playlist = useSelector((state) => state.playlist);
	const dispatcher = useDispatch();

	return (
		<div className="App">
			<h1>React Playlist</h1>
			<p>Filmes adicionados: ({playlist.movies.length})</p>
			<nav>
				<Link to="/playlist">Visualizar Playlist</Link>
				<br></br>
				<button
					onClick={() =>
						dispatcher(clearPlaylist())
					}
				>
					Clear Playlist
				</button>
			</nav>
			<MoviesList movies={movies} />
		</div>
	);
}
