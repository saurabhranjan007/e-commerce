import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Register from "./InitHome/Register";
import Login from "./InitHome/Login";
import Profile from "./common/Profile/Profile";
import Head from "./common/header/Head";

function Home({ CartItem, productItems, addToCart }) {
  return (
    <>
      <Header CartItem={CartItem} />
      <Pages productItems={productItems} addToCart={addToCart} />
    </>
  );
}
  
function App() {

  const [productItems, setProductItems] = useState([])

  const getAllData = async() => {
    const apiCall = await fetch('http://localhost:3000/flash/all', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
    const resData = await apiCall.json();
    setProductItems(resData.data)
  }

  useEffect(() => {
    getAllData(); 
  }, [])

  const [CartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item
        )
      );
    }
  };

  const [loggedIn, setLoggedIn] = useState(false);
  console.log(`state of loggedIn: ${loggedIn}`);

  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <>
            <Head />
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </>
        </Route>
        <Route path="/signup" exact>
          <>
            <Head />
            <Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </>
        </Route>
        <Route path="/" exact>
          {loggedIn ? (
            <Home CartItem={CartItem} productItems={productItems} addToCart={addToCart} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/logout" exact>
          {loggedIn ? 
            (
              <>
                <Header CartItem={CartItem} />
                <Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              </>
            ) : <Redirect to="/login" />}
        </Route>
        <Route path="/cart" exact>
          {loggedIn ? (
            <>
              <Header CartItem={CartItem} />
              <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
