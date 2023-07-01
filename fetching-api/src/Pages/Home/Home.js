import "./Home.css";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import { SearchButton, Wrapper } from "./index.styled";


const Home = () => {


  return (
   <Wrapper>
    <SearchButton>Alen Kalac</SearchButton>
   </Wrapper>
  );
};

export default Home;
