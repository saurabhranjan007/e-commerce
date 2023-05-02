import React, { useState, useEffect } from "react"

const Cart = () => {

  const [Ndata, setNdata] = useState([])

  const getAllData = async() => {
    const apiCall = await fetch('http://localhost:3000/new-product/all', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })

    const resData = await apiCall.json();
    setNdata(resData.data)
    // console.log('resData ', resData.data);
  }

  useEffect(() => {
    getAllData(); 
  }, [])

  return (
    <>
      <div className='content grid product'>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={val._id}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
