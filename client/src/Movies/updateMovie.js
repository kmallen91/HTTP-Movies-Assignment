import React from 'react'

const UpdateMovie = props => {

    return (
        <div>
            <h2>Update Movie</h2>

            <form className='form-container'>
                <label className="movie-title">
                    Movie Title 
                    <input type='text' name='title' placeholder='Title' />
                </label>
                <label className="movie-director">
                    Director:
                    <input type='text' name='director' placeholder='Director' />
                </label>
                <label className="movie-score">
                    Metascore: 
                    <input type='text' name='score' placeholder='Score' />
                </label>
                <label className="movie-actors">
                    Actors: 
                    <input type='text' name='actors' placeholder='Actor 1' />
                    <input type='text' name='actors' placeholder='Actor 2' />
                    <input type='text' name='actors' placeholder='Actor 3' />
                </label>

                <button className="submit-button" >Add Movie</button>
            </form>
        </div>
    )
}

export default UpdateMovie