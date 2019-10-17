import React, { useState } from 'react'
import axios from 'axios'

const initialMovie = {
    name: '',
    director: '',
    metascore: '',
    stars: []
}

const AddMovie = props => {

    const [movie, setMovie] = useState(initialMovie)

    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        setMovie({
          ...movie,
          [ev.target.name]: value
        });
      };

    const formSubmit = e => {
        const stars = Array.isArray(movie.stars) ? movie.stars : movie.stars.split(',')
        const updatedMovie = {...movie, stars }
        
        axios
            .post(`http://localhost:5000/api/movies`, updatedMovie)
            .then (res => {
                console.log(res)
                props.setMovie(res.data)
                props.history.push('/')
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div>
            <h2>Add a Movie</h2>

            <form className='form-container' onSubmit={formSubmit}>
                <label className="movie-title">
                    Movie Title 
                    <input type='text' name='title' placeholder='Title' value={movie.title} onChange={changeHandler} />
                </label>
                <label className="movie-director">
                    Director:
                    <input type='text' name='director' placeholder='Director' value={movie.director} onChange={changeHandler} />
                </label>
                <label className="movie-score">
                    Metascore: 
                    <input type='number' name='metascore' placeholder='Score' value={movie.metascore} onChange={changeHandler} />
                </label>
                <label className="movie-actors">
                    Actors: 
                    <input type='text' name='stars' placeholder='Actors' value={movie.stars} onChange={changeHandler} />
                    
                </label>

                <button className="submit-button" >Add Movie</button>
            </form>
        </div>
    )
}

export default AddMovie