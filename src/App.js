import React from 'react'
import { BrowserRouter  , Routes, Route  } from 'react-router-dom'
import "./App.css"
import Header from './components/header/header'
import MovieList from './components/moviesList/MovieList'
import Home from './pages/home/Home'
import Movie from './pages/movieDetails/Movie'
const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='movie/:id' element={<Movie />}></Route>
            <Route path='movies/:type' element={<MovieList />}></Route>
            <Route path='/*' element={<h1>Error page</h1>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App