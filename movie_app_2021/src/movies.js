import React from 'react'
import PropTypes from 'prop-types'

function Movie({year,title,summary,poster,genres}){
    return (
    <div className='movie'>
        <img src={poster} alt={title} title={title}/>
        <div className='movie data'>
            <h3 className='movie__tile'>{title}</h3>
            <h4 className='movie__year'>{year}</h4>
            <ul className='genres'>
                {genres.map((el,index)=><li key={index} className='movie__genres'>{el}</li>)}
            </ul>
            <p className='movie__summary'>{summary}</p>
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