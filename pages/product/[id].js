import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";

const ProductPage = () => {
  const [product, setProduct] = useState({});

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await window.fetch(`/api/avocado/${id}`);
        const { data } = await response.json();
        setProduct(data);
      } catch (error) {
        setProduct({});
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <section>
      <Navbar />
      <section>
        <h1>Página producto</h1>
        {product ? (
          <div>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <h3>{product.sku}</h3>
            <img src={product.image} />
            {product.attributes ? (
              <div>
                <p>{product.attributes?.description}</p>
                <p>{product.attributes?.hardiness}</p>
                <p>{product.attributes?.shape}</p>
                <p>{product.attributes?.taste}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </section>
    </section>
  );
};

export default ProductPage;
