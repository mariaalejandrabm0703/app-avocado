import { useRouter } from "next/router";
import React from "react";

const ProductItem = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Pagina para el producto {router.query.id}</h1>
    </div>
  );
};

export default ProductItem;
