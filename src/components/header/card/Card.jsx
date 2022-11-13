import { useEffect , useState } from "react"
import React from 'react'
import Skeleton , { SkeletonTheme} from "react-loading-skeleton"
import { Link } from "react-router-dom"
import "./card.css"

const Card = ({movie}) => {
    const [ isLoading , setIsLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    }, [])
  return (
    <div>
        {
            isLoading
            ?
            <div className="cards">
                <SkeletonTheme color = "#202020" highlightColor="#444">
                    <Skeleton height={300} duration= {2} />
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} state ={{textDecoration : "none", color: "white"}}>
                <div className="cards">
                    <img className="cards_img" src={`http://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/>
                    <div className="cards_overlay">
                        <div className="cards_title">
                            {movie?movie.original_title:""}
                        </div>
                        <div className="cards_runtime">
                            {movie?movie.release_date:""}
                            <span className="cards_rating">
                            {movie?movie.vote_average:""}<i className="fas fa-star" /> {' '}             
                            </span>
                        </div>
                        <div className="cards_description">
                        {movie ? movie.overview.slice(0,118)+"...":""}
                        </div>
                    </div>
                </div>
            </Link>
        }
    </div>
  )
}

export default Card