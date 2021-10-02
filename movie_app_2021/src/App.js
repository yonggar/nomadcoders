import React from "react";
import {useState, useEffect} from 'react'
import axios from 'axios'
import Movie from "./movies";

function App() {
  const [isLoding,setLoding]=useState(true)
  const [movies,setMovies]=useState([])
  
  async function getMovies() {
    const {data:{data:{movies}}}= await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=raitng')
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
