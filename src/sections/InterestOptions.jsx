import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InterestOptionPage = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([
    {
      name: "Clothes",
      items: [
        "T-Shirt",
        "Jeans",
        "Dresses",
        "Jackets",
        "Sweaters",
        "Skirts",
        "Shorts",
        "Blouses",
        "Suits",
        "Coats"
      ],
      showMore: false
    },
    {
      name: "Mobile",
      items: [
        "iPhone",
        "Samsung Galaxy",
        "Google Pixel",
        "OnePlus",
        "Huawei",
        "Xiaomi",
        "LG",
        "Motorola",
        "Sony Xperia",
        "Nokia"
      ],
      showMore: false
    },
    {
      name: "Electronics",
      items: [
        "Laptop",
        "Tablet",
        "Smartwatch",
        "Headphones",
        "Camera",
        "Smart TV",
        "Gaming Console",
        "Speaker",
        "Router",
        "Printer"
      ],
      showMore: false
    },
    {
      name: "Shoes",
      items: [
        "Sneakers",
        "Boots",
        "Sandals",
        "Flats",
        "Heels",
        "Oxfords",
        "Loafers",
        "Slippers",
        "Espadrilles",
        "Wedges"
      ],
      showMore: false
    }
  ]);

  const toggleShowMore = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].showMore = !updatedCategories[index].showMore;
    setCategories(updatedCategories);
  };

  return (
    <>
<h2 className="text-2xl font-semibold text-center mb-6">Let's be more specific!</h2>
      <div className="flex flex-row overflow-x-auto space-x-4"></div>
      <h4 className="text-2xl font-semibold text-center mb-6">We have some recommended options for your chosen interests</h4>
      <div className="flex flex-row overflow-x-auto space-x-4"></div>

<div className="container mx-auto p-4">
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
          {category.items.slice(0, category.showMore ? category.items.length : 4).map((item, i) => (
            <div key={i} className="flex items-center mb-2">
              <label htmlFor={`${category.name}-${i}`} className="mr-2">{item}</label>
              <input type="checkbox" className="ml-auto" id={`${category.name}-${i}`} />
            </div>
          ))}
          {category.items.length > 4 && (
            <button
              onClick={() => toggleShowMore(index)}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              {category.showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      ))}
      <div className="flex justify-between">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/home')}>
          Continue
        </button>
      </div>
    </div>
    </>
  );
};

export default InterestOptionPage;
