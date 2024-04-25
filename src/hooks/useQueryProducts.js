import { useState, useEffect } from "react";

const useQueryProducts = async () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let allProducts = 70;

  const getProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const result = await response.json();
      setProducts(result);
      allProducts = result;
      // console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    console.log(allProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    loading,
    allProduct: "ama",
  };
};

export default useQueryProducts;
