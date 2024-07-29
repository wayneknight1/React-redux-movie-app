import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovieOrShowDetail } from '../../features/movies/movieSlice'

function MovieDetail() {
  const {imdbID} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovieOrShowDetail(imdbID))
  },[dispatch,imdbID])

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail