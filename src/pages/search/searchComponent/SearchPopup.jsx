/////////////////////////////////////
import styled from './SearchPopup.module.css'

function SearchPopup () {
  return (
    <div className={styled.search}>
      <form>
        <h1>Search</h1>
        <div className={styled['search-input']}>
          <label>Destination</label>
          <input type="text" />
        </div>
        <div className={styled['search-input']}>
          <label>Check-in Date</label>
          <div className={styled['search-input--date']}>
          <input type="text" />to
          <input type="text" />
          </div>
        </div>
        <div className={styled['search-options']}>
          <h4>Options</h4>
          <div className={styled['search-option']}>
            <label>Min price per night</label>
            <input type="text" />
          </div>
          <div className={styled['search-option']}>
            <label>Max price per night</label>
            <input type="text" />
          </div>
          <div className={styled['search-option']}>
            <label>Adult</label>
            <input type="text" />
          </div>
          <div className={styled['search-option']}>
            <label>Children</label>
            <input type="text" />
          </div>
          <div className={styled['search-option']}>
            <label>Room</label>
            <input type="text" />
          </div>
        </div>
        <button className={styled['search-btn']}>Search</button>
      </form>
    </div>
  )
}

export default SearchPopup;