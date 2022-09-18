import { useParams } from "react-router-dom";
import { useGetMovies } from "../hooks/useGetMovies";

export default function MovieDetail() {
	const { movieId } = useParams();
	const { movie } = useGetMovies(movieId);

	return (
		<section>
			<h1>{movie.title}</h1>
			<section>
				<p>{movie.overview}</p>
			</section>
		</section>
	);
}