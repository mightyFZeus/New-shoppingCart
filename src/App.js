import "./styles.css";
import { useState, useEffect } from "react";
import { commerce } from "./Lib/Commerce";
import { Products, NavBar } from "./components";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    await commerce.cart.retrieve();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  return (
    <>
      <NavBar />
      <Products products={products} />
    </>
  );
}
