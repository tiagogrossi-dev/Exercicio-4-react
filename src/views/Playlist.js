import { useSelector } from "react-redux";
import { Movie } from "../components/Movie";
import { Link } from "react-router-dom";

export function Playlist() {
    const { movies } = useSelector((state) => state.playlist);

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            {movies.map((movie) => (
                <Movie key={movie.id} movieId={movie.id} movieTitle={movie.title} overview={movie.overview} />
            ))}
        </>
    )
}