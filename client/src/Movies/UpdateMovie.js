import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const UpdateMovie = (props) => {
    const history = useHistory()
    const params = useParams()
    let stars = []
    let movies = props.movies
    let movieId = Number(params.id)

    for (let i of movies) {
        if (Number(params.id) === i.id) {
            stars = i.stars
        }
    }
    const initialState = {
        id: movieId,
        title: '',
        director: '',
        metascore: '',
        stars: stars
    }
    const [movie, setMovie] = useState(initialState)

    const updateMovie = (updatedMovie) => {
        axios
            .put(`http://localhost:5000/api/movies/${params.id}`, updatedMovie)
            .then(res => {
                console.log(res)
            })
            .catch(err => {console.log(err)})
    }
    return (
        <div>
            <form>
                <p>Name</p>
                <input type='text' name='title' onChange={(e) => {
                    setMovie({...movie, title: e.target.value})
                }} />
                <p>Director</p>
                <input type='text' name='director' onChange={(e) => {
                    setMovie({...movie, director: e.target.value})
                }} />
                <p>Metascore</p>
                <input type='text' name='metascore' onChange={(e) => {
                    setMovie({...movie, metascore: e.target.value})
                }} />
                <button onClick={() => {
                    console.log(movie)
                    updateMovie(movie)
                    setMovie(initialState)
                    history.push('/')
                }}>Update</button>
            </form>
        </div>
    )
}

export default UpdateMovie