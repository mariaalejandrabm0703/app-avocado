import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar/Navbar"

const ProductItem = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <h1>Pagina para el producto {router.query.id}</h1>
    </div>
  );
};

export default ProductItem;
