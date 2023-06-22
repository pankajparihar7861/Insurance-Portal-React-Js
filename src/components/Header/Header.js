import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/bootstrap-icons.css'
import '../../assets/css/bootstrap.min.css'
import Logo from '../../assets/img/profile-img.jpg'

export const Header = () => {

 

  return (
    <div>

      <>
        <header id='header' class='header fixed-top d-flex align-items-center'>
          <div class='d-flex align-items-center justify-content-between'>
            <Link to='/Dashboard' class='logo d-flex align-items-center' style={{ textDecoration: 'none'}}>
              <span class='d-none d-lg-block'>Ins Agent's Portal</span>
            </Link>
          </div>
       
          <div class='search-bar'>
            <form
              class='search-form d-flex align-items-center'
              method='POST'
              action='#'
            >
              <input
                type='text'
                name='query'
                placeholder='Search'
                title='Enter search keyword'
              />
              
              {/* <button type='submit' title='Search'> </button> */}
            </form>
          </div>
          
          <nav class='header-nav ms-auto'>
            <ul class='d-flex align-items-center'>
              <li class='nav-item d-block d-lg-none'>
                
                <a class='nav-link nav-icon search-bar-toggle ' href='#'>
                 
                  <i class='bi bi-search'></i>
                </a>
              </li>
              <li class='nav-item dropdown'>
                <a class='nav-link nav-icon' href='#' data-bs-toggle='dropdown'>
                 
                  <i class='bi bi-bell'></i>
                  <span class='badge bg-primary badge-number'>4</span>
                </a>
              </li>

              <li class='nav-item dropdown pe-3'>
                <a class='nav-link nav-profile d-flex align-items-center pe-0'
                  href='#'
                  data-bs-toggle='dropdown'
                >
                 
                  <img
                    src={Logo}
                    alt='Profile'
                    class='rounded-circle'
                  />
                  <span class='d-none d-md-block dropdown-togge ps-2'></span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    </div>
  )
}
