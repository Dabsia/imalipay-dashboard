import React from 'react'
import './Search.css'

const Search = ({ placeholder, filterText, setFilterText }) => {
  return (
    <div className='searchContainer'>
      <div className='searchBox'>
        <i className="ri-search-line"></i>
        <input value={filterText} onChange={e => setFilterText(e.target.value)} className='searchInput' placeholder={placeholder} type='text' />
      </div>
      <button className='exportBtn'>Export</button>
    </div>
  )
}

export default Search