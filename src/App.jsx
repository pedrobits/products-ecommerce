import React, { useState, useEffect } from "react";
import fetchDataProdutos from "./data/services/Produtos/getProdutos";
import NavBar from "./components/navBar";
import HeroCarousel from "./components/heroCarousel"

export default function App() {
  const [produtos, setProdutos] = useState(null);

  // useEffect(() => {
  //   fetchDataProdutos(setProdutos);
  // }, []);

  return (
    <>
      <NavBar />
      <HeroCarousel />
    </>
  );
}
