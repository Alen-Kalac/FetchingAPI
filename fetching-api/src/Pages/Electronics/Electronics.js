import "./Electronics.css";
import { useState,useEffect } from "react";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import axios from 'axios'

function Electronics() {
  const [data, setData] = useState([])

  const FetchData = async () => {
      try {
          const response = await axios.get('https://fakestoreapi.com/products/category/electronics')
          setData(response.data)
      }
      catch(error){
          console.log(error)
      }
  }

  useEffect(() => {
      FetchData()
  }, [])
  return (
    <div className="electronics">
      <Header />
      <div className="electronics-content">
      {data.map((product) => (
        <ItemCard 
        key={product.id}
            image={product.image}
            title = {product.title}
            description = {product.description}
            price = {product.price}
            />
        ))}
      </div>
    </div>
  );
}

export default Electronics;
