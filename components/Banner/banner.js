import React from 'react'
import './banner.css'


function Banner() {
  return (
    <div className="banner">
      <div className="cover">
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" className='img' alt="zomato" />
      </div>
      <div className=" content-wrapper">
        <div className="max-width logo">
          <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" className='title' alt="logo" />
        </div>
        <h1 className="max-width description">
          Discover the best food & drinks in <span className='next-line'>Delhi NCR</span>
        </h1>
        <div className='location-search-container'>
                  <div className="location">
            <div className='location-wrapper'>
            <div className="location-icon-name">
              <i className="fa-solid fa-location-dot absolute-centre location-icon"></i>
              <input placeholder="Ywca, 1, Ashoka Rd, Hanuman Road Area, Connaught Place, New Delhi, Delhi" className='address' />
            </div>
            <i className="fa-solid fa-caret-down absolute-centre"></i>
            </div>
            <div className='location-search-separator'></div>
            <div className='header-searchBar'>
            <i class="fa-solid fa-magnifying-glass absolute-centre search-icon"></i>
            <input placeholder='Search for restaurant, cuisine or a dish' className='search-input' />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Banner