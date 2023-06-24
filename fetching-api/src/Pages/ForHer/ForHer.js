import "./ForHer.css";
import { useQuery } from "react-query";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import axios from 'axios'

const FetchData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products/category/women's%20clothing")
  const  data = response.data
  return data
}
function ForHer() {
  const {data,isLoading,isError,error} = useQuery('products',FetchData)

  if(isLoading){
    return <div className="loader"> Loading ...</div>
  }
  if(isError){
    <div>Error : {error.message} </div>
  }


  return (
    <div className="ForHer">
      <Header />
      <div className="ForHer-content">
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

export default ForHer;
