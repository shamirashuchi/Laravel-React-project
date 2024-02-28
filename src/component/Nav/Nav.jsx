import React, { useState } from 'react'
import './Nav.css'
const Nav = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <div>
      {window.innerHeight > 600 ? (
        <nav className='wrapper'>
          <ul className='logo'>
            <li>
              <img
                className='image'
                src='download-removebg-preview.png'
                alt=''
              />
            </li>
          </ul>
          <ul className='home'>
            <li>
              <a href='#'>Home</a>
            </li>

            <li>
              <a href='#'>About</a>
            </li>
            <li className='dropdown'>
              <a href='#'>Women</a>
              <div className='dropdown-content'>
                <p>Hello World!</p>
                <p>Hello World!</p>
                <p>Hello World!</p>
                <p>Hello World!</p>
              </div>
            </li>
            <li className='dropdown'>
              <a href='#'>Men</a>
              <div className='dropdown-content'>
                <p>Hello World!</p>
              </div>
            </li>
          </ul>
          <ul className='user'>
            <li>
              <a href='#'>Sign In</a>
            </li>
            <li>
              <a href='#'>Register</a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className='wrapper-small'>
          <ul className='logo'>
            <li>
              <img
                className='image'
                src='download-removebg-preview.png'
                alt=''
              />
            </li>
          </ul>
          {isMobile && (
            <div className='small'>
              <ul className='home-small'>
                <li>
                  <a href='#'>Home</a>
                </li>
                <li>
                  <a href='#'>About</a>
                </li>
                <li>
                  <a href='#' className='women'>
                    Women
                  </a>
                </li>
                <li>
                  <a href='#' className='Men'>
                    Men
                  </a>
                </li>
              </ul>
              <ul className='user-small'>
                <li>
                  <a href='#'>Sign In</a>
                </li>
                <li>
                  <a href='#' className='Register'>
                    Register
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='icon-width'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18 18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='icon-width'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            )}
          </button>
        </nav>
      )}
    </div>
  )
}

export default Nav
