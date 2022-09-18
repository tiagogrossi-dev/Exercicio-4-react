import { useState, useEffect } from "react";
import { MoviesService } from "../services/MoviesService"

export function useGetMovies(movieId) {
	const [movies, setMovies] = useState([]);
	const [movie, setMovie] = useState({});

	useEffect(() => {
		if (movieId) {
			MoviesService.getById(movieId).then(({ data }) => {
				setMovie(data);
			});
		} else {
			MoviesService.get().then(({ data: { results } }) => {
				setMovies(results);
			});
		}
	}, []);

	return { movies, movie };
}