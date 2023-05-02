import React from "react"
import { Link } from "react-router-dom"
import './Header.css'

const MainNav = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex cursor-class'>
          <div className='logo width '>
            <Link to="/">
              <h4 className="main-logo"> LUXE STORE</h4>
            </Link>
          </div>
          <div className='icon f_flex width'>
            <Link to="/profile">
              <i className='fa fa-user icon-circle'></i>
            </Link>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainNav
