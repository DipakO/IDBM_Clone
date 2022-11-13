import React, {useEffect, useState} from 'react'
import "./movie.css"
import { useParams } from 'react-router-dom'

const Movie = () => {
    const [currentMoviesDetail , setMovies] = useState()
    const { id } = useParams()

    useEffect(()=>{
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res=>res.json())
        .then(data=>setMovies(data))
    }

  return (
    <div className='movie'>
        <div className="movie-intro">
            <img src={`https://image.tmdb.org/t/p/original${currentMoviesDetail ? currentMoviesDetail.backdrop_path : ""}`}  className="movie_backdrop" />
        </div>
        <div className="movie_detail">
            <div className="movie_detailLeft">
                <div className="movie_posterBox">
                    <img src={`https://image.tmdb.org/t/p/original${currentMoviesDetail ? currentMoviesDetail.poster_path : ""}`} className='movie_poster' />
                </div>
            </div>
            <div className="movie_detailRight">
                <div className="movie_detailRightTop">
                    <div className="movie_name">{currentMoviesDetail ? currentMoviesDetail.original_title : ""}</div>
                    <div className="movie_tagline">{currentMoviesDetail ? currentMoviesDetail.tagline : ""}</div>
                    <div className="movie_rating">
                        {currentMoviesDetail ? currentMoviesDetail.vote_average : ""}<i className='fas fa-star' />
                        <span className='movie_voteCount'>{currentMoviesDetail ? "(" + currentMoviesDetail.vote_count + ") votes" : ""}</span>
                    </div>
                    <div className="movie_runtime">{currentMoviesDetail ? currentMoviesDetail.runtime + " mins" : ""}</div>
                    <div className="movie_releaseDate">{currentMoviesDetail ? "Release date " + currentMoviesDetail.release_date : ""}</div>
                    <div className="movie_genres">
                        {
                            currentMoviesDetail && currentMoviesDetail.genres 
                            ?
                            currentMoviesDetail.genres.map(genre => (
                                <><span className='movie_genre' id={genre.id}>{genre.name}</span></>
                            ))
                            :
                            ""
                        }
                    </div>
                </div>
                <div className="movie_detailRightBottom">
                    <div className="synopsisText">Synopsis</div>
                    <div>{currentMoviesDetail ? currentMoviesDetail.overview : ""}</div>
                </div>

            </div>
        </div>
        <div className="movie_links">
            <div className="movie_heading">Useful Links</div>
            {
                currentMoviesDetail && currentMoviesDetail.homepage && <a href={currentMoviesDetail.homepage} target="_blank" style={{textDecoration : "none"}}><p><span className='movie_homeButton movie_Button'>Homepage <i className='newTab fas fa-external-link-alt'></i> </span></p></a>
            }
            {
                currentMoviesDetail && currentMoviesDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMoviesDetail.imdb_id} target="_blank" style={{textDecoration : "none"}}><p><span className='movie_imdbButton movie_Botton'>IMDb<i className='newTab fas fa-external-link-alt'></i></span></p></a>
            }
        </div>
        <div className="movie_heading">Production companies</div>
        <div className="movie_production">
            {
                currentMoviesDetail && currentMoviesDetail.production_companies && currentMoviesDetail.production_companies.map(company => (
                    <>
                        {
                            company.logo_path 
                            &&
                            <span className='movie_productionCompanyImage'>
                                <img className='movie_productionCompany' src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                <span>{company.name}</span>
                            </span>
                        }
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default Movie