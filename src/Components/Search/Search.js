import React from 'react'
import './Search.css'

const Search = ({ placeholder }) => {
  return (
    <div className='searchContainer'>
      <div className='searchBox'>
        <i className="ri-search-line"></i>
        <input className='searchInput' placeholder={placeholder} type='text' />
      </div>
      <button className='exportBtn'>Export</button>
    </div>
  )
}

export default Search