import './Movie.css'

import { NavLink, useLocation, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';
// import movies from "../postData";

function Movie() {
    const params = useParams();
    const [movies, setMovies] = useState([]);
    // 클릭된 영화의 정보를 출력하기위해 인덱스로 지정
    let [searchParams, setSearchParams] = useSearchParams()
    // Link에 스타일 주기 위해서 NavLink로 변경해서 스타일을 추가
    const applyActiveColor = ({isActive}) => (isActive? {color:'orangered'} : {color:''})

    // 첫 로딩에 모든 영화 정보 가저오기
    useEffect(() => {
        fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count')
        .then(res => res.json())
        .then( result => {
            const {data: {movies}} = result
            setMovies(movies)
        });
    }, []);

    // URL 쿼리스트링 값을 사용자가 입력한 키워드로 설정함(변경함)
    const changeQueryString = (e) => {
        const filter = e.target.value
        if (filter) {
            setSearchParams({filter})
        } else {
            setSearchParams({})
        }
    }

    // 스프래드 연산자로 인해서 props = {key, style, className}
    const QueryNavLink = ({ to, children, ...props}) => {
        const location = useLocation();
        console.log(location)
        return <NavLink to={to + location.search} {...props}>{children}</NavLink>
    }

    // 필터링된 목록으로 렌더링하기
    const moviesFiltered = movies.filter(movie => {
        const filter = searchParams.get('filter')
        if (!filter) return true;
        const title = movie.title.toLowerCase()
        return title.includes(filter.toLowerCase())
    })
    const movie = moviesFiltered[params.movieId];


    return (
        <div className='movies'>
            {/* 검색창 */}
            <div className='movie-search1'>
                <input className="filter-movie" placeholder="Search movie..." value={searchParams.get('filter') || ""} 
                onChange={changeQueryString}/>
            </div>
            
            {/* 특정 블로그 포스트 보여주기 */}
            {movie ?
                <div className="movie-container">
                    <h1>{movie.title}</h1>
                    <img src={movie.medium_cover_image} alt=""/>
                    <p><b>{movie.genres.join(' / ')}</b></p>
                    <span>{movie.summary}</span>
                </div> :
                <h1>MOVIE PAGE</h1>}

            
                
            {/* 블로그 전체목록 보여주기 */}
            {moviesFiltered.map( (movie, id) => {
                return (
                    <QueryNavLink key={id} to={`/movies/${id}`} className="movie-item" style={applyActiveColor}>{movie.title}</QueryNavLink>
                )}
            )} 
        </div>
    )
}

export default Movie