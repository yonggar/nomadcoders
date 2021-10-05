import React from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD:movie_app_2021/src/movies.js
import './movies.css'
=======
import './Movie.css'
>>>>>>> bcdf236ceba1563d94f8e546a54e24d4aadaacdf:movie_app_2021/src/Movie.js

function Movie({year,title,summary,poster,genres}){
    return (
    <div className='movie'>
        <img src={poster} alt={title} title={title}/>
        <div className='movie data'>
            <h3 className='movie__tile'>{title}</h3>
            <h4 className='movie__year'>{year}</h4>
            <ul className='movie__genres'>
                {genres.map((el,index)=><li key={index} className='movie__genres'>{el}</li>)}
            </ul>
<<<<<<< HEAD:movie_app_2021/src/movies.js
            <p className='movie__summary'>{summary.slice(0,140)}...</p>
=======
            <p className='movie__summary'>{summary.slice(0,180)}...</p>
>>>>>>> bcdf236ceba1563d94f8e546a54e24d4aadaacdf:movie_app_2021/src/Movie.js
        </div>
    </div>
    )}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie