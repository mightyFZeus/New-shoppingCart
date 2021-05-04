import "./styles.css";
import {useState, useEffect} from 'react'
import {commerce} from './Lib/Commerce'
import { Products, NavBar } from "./components";

export default function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () =>{
        const {data} = await commerce.products.list()
        setProducts(data)
  }

  useEffect(() =>{
    fetchProducts() 
  }, [])

console.log(products)
  return (
    <>
      <NavBar />
      <Products products={products} />
    </>
  );
}
