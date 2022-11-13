import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
// import image from "./assets.IMDB.png"
const Header = () => {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB" /></Link>
            <Link to="/movies/popular" style = {{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style = {{textDecoration: "none"}}><span>Top Raded</span></Link>
            <Link to="/movies/upcoming" style = {{textDecoration: "none"}}><span>Upcoming</span></Link>
        </div>
    </div>
  )
}

export default Header