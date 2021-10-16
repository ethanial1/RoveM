import style from '../css/movieCard.module.css'

export function MovieCard({movie}) {
    const img_url = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <li className={style.movieCard}>
        <img width={230} height={345} className={style.movieImage} src={img_url} alt={movie.title}/>
        <div>{movie.title}</div>
        </li>
}