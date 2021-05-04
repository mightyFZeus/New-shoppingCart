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
    ;
    setCart(await commerce.cart.retrieve());
  };

  const handleAddTocart = async (productId, quantity) =>{
      const item = await commerce.cart.add(productId, quantity)
      setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  return (
    <>
      <NavBar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddTocart} />
    </>
  );
}
