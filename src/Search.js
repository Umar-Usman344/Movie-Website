import React from 'react'
import { GlobalContext } from './context'

function Search() {
  const {search, setSearch, errorMsg}=GlobalContext();
  return (
    <section className='search-section'>
      <h2>Search Your Favourite Movie</h2>
      <form action="#" onSubmit={(e)=>e.preventDefault()}>
<input type='text' placeholder='search here...' value={search} 
onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      <div className='card-error'>
        <p>{errorMsg.show && errorMsg.msg}</p>
      </div>
    </section>
  )
}

export default Search
