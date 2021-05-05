import "./styles.css";
import { useState, useEffect } from "react";
import { commerce } from "./Lib/Commerce";
import { Products, NavBar, Cart } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddTocart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart);
  return (
    <Router>
      <>
        <NavBar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddTocart} />
          </Route>

          <Route exact path="/Cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
