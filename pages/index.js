import React, { useEffect, useState } from "react";

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
      <h1 className="text-3xl font-bold underline">Hola mundo platzi</h1>
      {products?.map((product) => {
        return <h1 key={product.id}> {product.name} </h1>;
      })}
    </div>
  );
};

export default Home;
