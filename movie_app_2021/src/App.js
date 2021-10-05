import React from "react";
import {useState, useEffect} from 'react'
import axios from 'axios'
<<<<<<< HEAD
import Movie from "./movies";
=======
import Movie from "./Movie";
>>>>>>> bcdf236ceba1563d94f8e546a54e24d4aadaacdf
import './App.css'

function App() {
  const [isLoding,setLoding]=useState(true)
  const [movies,setMovies]=useState([])
  
  async function getMovies() {
    const {data:{data:{movies}}}= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    setMovies(movies)
  }

  function loding(){
    setTimeout(()=>{setLoding(false)},2000)
  }

  useEffect(getMovies,[])
  useEffect(loding,[isLoding])

  return (
  <section className='container'>
    {isLoding
    ? <div className='loader'>
        <span className='loader__text_'>Loding...</span> 
      </div>
    : <div className='movies'>
      {movies.map(el=>{
      // console.log(el)
      return <Movie 
      key={el.id}
      title={el.title}
      year={el.year}
      summary={el.summary}
      genres={el.genres}
      poster={el.medium_cover_image}/>
    })}
    </div>}
  </section>
  );
}

export default App;
