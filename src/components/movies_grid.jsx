import movies from '../movies.json'
import { MovieCard } from './movie_card';
import styles from '../css/Grid.module.css';

export function MoviesGrid() {
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </ul>
    );
}