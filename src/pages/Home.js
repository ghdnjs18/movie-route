import './Home.css'
import { useEffect, useState } from "react";

function Home() {
    const [movies, setMovies] = useState([]);
    // 첫 로딩에 모든 영화 정보 가저오기
    useEffect(() => {
        fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count')
        .then(res => res.json())
        .then( result => {
            const {data: {movies}} = result
            setMovies(movies)
        });
    }, []);

    return (
        <div className="home-cards">
            {movies.map( (movie, id) => {
                return(
                    <div className="home-card">
                        <img src={movie.medium_cover_image} alt=""/>
                        <p>{movie.title}</p>
                    </div>
                )
            })}
        </div>

    )
}

export default Home