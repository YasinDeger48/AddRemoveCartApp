import React from "react";
import "./styles.css";
import { Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";


const App = (props) => {

  return (
    <div className="App">

<h1>
<img src="https://avatars.githubusercontent.com/u/8417720?v=4" alt="Picture Alt"/>
  K<span>itapçı</span>M 
</h1>

      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
};

export default App;
