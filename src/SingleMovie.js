import React , {useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './context'

function SingleMovie() {
  const {id} = useParams()

  const[isLoading, setIsLoading]=useState(true)
const[Movie, setMovie]=useState("")

    const getMovie = async (url)=>{
try{
       const res= await fetch(url);
       const data= await res.json();
       console.log(data)
       if((data.Response) === "True"){
          setIsLoading(false);
          setMovie(data)
       }
      
}catch(error){
    console.log(error)
}
    }

useEffect(()=>{
   let timerOut= setTimeout(()=>{
        getMovie(`${API_URL}&i=${id}`)
    },800)
return ()=>clearTimeout(timerOut)
},[id])
if(isLoading){
  return (
    <div className='movie-section'>
      <div className='loading'>Loading...</div>
    </div>
  )
}
  return (
    <>
   <section className="movie-section">
   <div className="movie-card">
<figure>
  <img src={Movie.Poster} alt=""/>
</figure>
<div className='card-content'>
  <p className='title'>{Movie.Title}</p>
  <p className='card-text'>{Movie.Released}</p>
  <p className='card-text'>{Movie.Genre}</p>
  <p className='card-text'>{Movie.imdbRating} / 10</p>
  <p className='card-text'>{Movie.Country}</p>
  <NavLink to="/" className='back-btn'>Go Back</NavLink>
</div>
   </div>
   </section>
   </>
  )
}

export default SingleMovie
