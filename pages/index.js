import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await window.fetch("api/avocado");
        const { data } = await response.json();
        setProducts(data);
      } catch (error) {
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      {products?.map((product) => {
        return <h1 key={product.id}> {product.name} </h1>;
      })}
      <h1>Hola mundo platzi</h1>
    </div>
  );
};

export default Home;
