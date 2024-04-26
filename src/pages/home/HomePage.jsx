import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import AllCategoriesCard from "../../sections/homesections/AllCategories";
import BestDealsCard from "../../sections/homesections/BestDeal";
import DiscountCard from "../../sections/homesections/Discount";
import Store from "../../sections/homesections/store";



// Shared Tailwind CSS class strings
const titleClass = "text-lg font-semibold text-zinc-700 dark:text-zinc-300";
const gridClass = "grid grid-cols-4 gap-4 mt-2";

const Section = ({ title, children }) => (
  <div className="mt-4">
    <h2 className={titleClass}>{title}</h2>
    {children}
  </div>
);

// Main HomePage component
const HomePage = () => {
  // Assuming username might be dynamic in a real-world scenario
  
const username = localStorage.getItem('userName');

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const result = await response.json();
      setProducts(result);
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  
 

  
  
  return (
    <body className="bg-zinc-100 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold text-zinc-800 dark:text-white pt-6">
          Hello, <span>{username}</span>
        </h1>

        <Section title="Point of Sale">
          <Store />
        </Section>

        <Section title="Best deals">
          {loading ? (
            <p>Loading</p>
          ) : (
            <div className={gridClass}>
              {products &&
                products.map((product) => (
                  <div className="">
                  <BestDealsCard key={product._id} product={product} />
                  </div>
                ))}
            </div>
          )} 
        </Section>

        <Section title="All Categories">
          <div className="flex mt-2 space-x-2 overflow-x-auto">
            <AllCategoriesCard />
          </div>
        </Section>

        <Section title="Up to 70% Discount">
          <div className={gridClass}>
            <DiscountCard />
          </div>
        </Section>

        <Section title="My Interests " className=''>
          <div className={gridClass} >
            <BestDealsCard />
          </div>
        </Section>
        <Navbar />
      </div>
    </body>
  );
};

export default HomePage;
