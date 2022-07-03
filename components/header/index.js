import React from 'react'
import './header.css'


function Header() {
  return (
    <div className='header'>
      <header className='nav-bar'>
        <nav className='nav '>
          <ul className='btn-containers'>
            <li tabIndex={0} className='mobile-btn'>
              <a href="/mobile" className='link'>
              <i className="fa-light fa-mobile mobile-icon absolute-centre"></i>
              Get the App
              </a>
            </li>
            <li tabIndex={0} className='investor btn'>
              <a href="./" className='link-btn'>Investor Relations</a>
            </li>
            <li tabIndex={0} className='restaurant btn'>
              <a href="./" className='link-btn'>Add restaurant</a>
            </li>
            <li tabIndex={0} className='profile btn'>
              <div className='profile-container'>
                <div className='profile'>
                  <div className='logo-name'>
                    <img src="https://b.zmtcdn.com/images/user_avatars/wine_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" className='profile-logo' alt='profile'  />
                    <span className='profile-username'>Rajat</span>
                    <i className="fa-solid fa-angle-down absolute-centre arrow-down"></i>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header