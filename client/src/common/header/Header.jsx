import React from "react"
import "./Header.css"
import Head from "./Head"
import MainNav from "./MainNav"

const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <MainNav CartItem={CartItem} />
    </>
  )
}

export default Header
