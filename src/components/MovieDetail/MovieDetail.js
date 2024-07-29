import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovieOrShowDetail, getSelectedMovieOrShow } from '../../features/movies/movieSlice'
import { useSelector } from 'react-redux'
import './MovieDetail.scss'
function MovieDetail() {
  const {imdbID} = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieOrShow)

  useEffect(() => {
    dispatch(fetchMovieOrShowDetail(imdbID))
  },[dispatch,imdbID])

  return (
    <div className='movie-section'>
      <div className='section-left'>
        <div className='movie-title'>{data.Title}</div>
        <div className='movie-rating'>
            <span>
              IMDB Rating: {data.imdbRating} 
            </span>
            <span>
              IMDB Votes: {data.imdbVotes} 
            </span>
            <span>
              Runtime: {data.Runtime} 
            </span>
            <span>
              Year: {data.Year} 
            </span>
        </div>
        <div className='movie-plot'>{data.Plot}</div>
        <div className='movie-info'>
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Genres</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>

        </div>
      </div>
      <div className='section-right'>
          <img src={data.Poster} alt={data.Title}/>
      </div>
    </div>
  )
}

export default MovieDetail