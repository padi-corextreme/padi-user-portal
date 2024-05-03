import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import AllCategoriesCard from "../../sections/homesections/AllCategories";
import BestDealsCard from "../../sections/homesections/BestDeal";
import DiscountCard from "../../sections/homesections/Discount";
import Store from "../../sections/homesections/store";

// Shared Tailwind CSS class strings
const titleClass = "text-lg font-semibold text-zinc-700 dark:text-zinc-300";
const gridClassDesktop = "grid grid-cols-4 gap-4 mt-2"; // Default for desktop
const gridClassMobile = "grid grid-cols-1 gap-2 mt-2"; // Mobile-specific grid

const Section = ({ title, children }) => (
  <div className="mt-4">
    <h2 className={titleClass}>{title}</h2>
    {children}
  </div>
);

// Main HomePage component
const HomePage = () => {
  // Assuming username might be dynamic in a real-world scenario
  const username = localStorage.getItem("userName");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check viewport width on initial render

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    getProducts();

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const getProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const result = await response.json();
      setProducts(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
            <div className={isMobile ? gridClassMobile : gridClassDesktop}>
              {products &&
                products.map((product) => (
                  <div key={product._id}>
                    <BestDealsCard product={product} />
                  </div>
                ))}
            </div>
          )}
        </Section>

        <Section title="All Categories">
          <div className={`flex mt-2 space-x-2 overflow-x-auto ${isMobile ? 'overflow-hidden' : ''}`}>
            <AllCategoriesCard />
          </div>
        </Section>

        <Section title="Up to 70% Discount">
          <div className={isMobile ? gridClassMobile : gridClassDesktop}>
            <DiscountCard />
          </div>
        </Section>

        <Section title="My Interests">
          <div className={isMobile ? 'mt-2' : gridClassDesktop}>
            <BestDealsCard />
          </div>
        </Section>

        <Navbar />
      </div>
    </body>
  );
};

export default HomePage;
