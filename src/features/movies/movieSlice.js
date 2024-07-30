import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`)
            .catch(err => {
                console.log('Err: ',err)
            })
            console.log('response from api is ',response)
            return response.data
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=series`)
            .catch(err => {
                console.log('Err: ',err)
            })
            console.log('response from api is ',response)
            return response.data
})
export const fetchMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`)
            .catch(err => {
                console.log('Err: ',err)
            })
            console.log('response from api is ',response)
            return response.data
})

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        removeSelectedMovieOrShow: (state,action) => {
            state.selectMovieOrShow = {}
        }
    },
    extraReducers: builder => { //significatly different. try debugging this if issues raise
        builder
        .addCase(fetchAsyncMovies.pending, state => {
            console.log('pending')
        })
        .addCase(fetchAsyncMovies.fulfilled,(state,action)=>{
            return {...state,movies: action.payload}
        })
        .addCase(fetchAsyncMovies.rejected, (state,action) => {
            console.log('Rejected!')
        })
        .addCase(fetchAsyncShows.fulfilled, (state,action) => {
            return {...state,shows: action.payload}
        })
        .addCase(fetchMovieOrShowDetail.fulfilled, (state,action) => {
            return {...state, selectMovieOrShow: action.payload}
        })
    }   
})

export const {removeSelectedMovieOrShow} = movieSlice.actions //self note - action creator. 
export const getAllMovies = state => state.movies.movies;
export const getAllShows = state => state.movies.shows;
export const getSelectedMovieOrShow = state => state.movies.selectMovieOrShow;
export default movieSlice.reducer