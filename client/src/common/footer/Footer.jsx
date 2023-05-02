import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1 className="li-cursor">LUXE STORE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul className="li-cursor">
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className='box'>
            <h2>Customer Care</h2>
            <ul className="li-cursor">
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Returns & Refunds </li>
              <li>Corporate Business</li>
            </ul>
          </div>

          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Sector 63, Noida - 201301</li>
              <li>Email: support@luxestore.in</li>
              <li>Phone: +91-00000000000</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
