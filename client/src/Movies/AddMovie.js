import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddMovie = () => {
    const history = useHistory()

    const initialState = {
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: []
    }

    const [movie, setMovie] = useState(initialState)

    const addMovie = (newMovie) => {
        axios
            .post('http://localhost:5000/api/movies/', newMovie)
            .then(res => {
                console.log(res)
            })
            .catch(err => {console.log(err)})

        history.push('/')
    }

    return (
        <div>
            <form>
                <p>ID</p>
                <input type='text' name='id' onChange={(e) => {
                    setMovie({...movie, id: e.target.value})
                }} />
                <p>Name</p>
                <input type='text' name='name' onChange={(e) => {
                    setMovie({...movie, name: e.target.value})
                }} />
                <p>Director</p>
                <input type='text' name='director' onChange={(e) => {
                    setMovie({...movie, director: e.target.value})
                }} />
                <p>Metascore</p>
                <input type='text' name='metascore' onChange={(e) => {
                    setMovie({...movie, metascore: e.target.value})
                }} />
                <p>Stars</p>
                <input type='text' name='stars' onChange={(e) => {
                    setMovie({...movie, stars: [...movie.stars, e.target.value]})
                }} />
                <button onClick={() => {
                    addMovie(movie)
                }}>Add</button>
            </form>
        </div>
    )
}

export default AddMovie