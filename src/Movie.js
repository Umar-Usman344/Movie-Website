import React from 'react'
import { GlobalContext } from './context'
import { NavLink } from 'react-router-dom';

function Movie() {
    
    const {Movie, isLoading}= GlobalContext();
    if(isLoading){
        return (
          <div className=''>
            <div className='loading'>Loading...</div>
          </div>
        )
      }
  return (
    <section className='movie-page'>
    <div className='container grid grid-4-col'>
{Movie.map((currMovie)=>{
    const {imdbID,Title,Poster}=currMovie
    const movieName= Title.substring(0,15)
return ( 
    <NavLink to={`movie/${imdbID}`} key={imdbID}>
        <div className='card'>
            <div className='card-info'>
                <h2>{Title.length>=15 ? `${movieName}...` : movieName}</h2>
                <img src={Poster} alt={imdbID}/>
            </div>
        </div>
    </NavLink>  
)


})}
    </div> 
  
    </section>
  )
}

export default Movie
