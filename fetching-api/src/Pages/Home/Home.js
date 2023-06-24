import "./Home.css";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
const FetchData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;
  return data;
};

const Home = () => {
  const { data, isLoading, isError, error } = useQuery("products", FetchData);
  const [searchBox, setSearchBox] = useState("");

  const newData = data.filter((p) => p.title.toLowerCase().includes(searchBox.toLowerCase()));

  const handleFilter = (event) => {
    
    setSearchBox(event.target.value);
    console.log(searchBox)
    
  };

  if (isLoading) {
    return <div className="loader"> Loading ...</div>;
  }
  if (isError) {
    <div>Error : {error.message} </div>;
  }

  return (
    <div className="home">
      <Header />
      <input type="text" className="searchBox" onChange={handleFilter} />
      <div className="home-content">
        {newData.map((product) => (
          <ItemCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
