import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import image1 from "../../assets/images/medium-shot-woman-antique-store 1.png"
import image2 from '../../assets/images/woman-walks-outside-with-paper-shopping-bags-messages-via-smartphone-glad-recieve-feedback-her-comment-happy-make-successful-purchases-leisure-time 1.png'
import image3 from "../../assets/images/portrait-african-american-man-pleased-with-his-shoe-choice-happy-dark-haired-man-holding-new-shoe-boutique-showing-it-camera-laughing-buying-menswear-clothes-business-concept 2.png"
import image4 from "../../assets/images/elegant-smartphone-composition-removebg-preview.png"
import image5 from "../../assets/images/arrangement-with-sanitary-products 1.png"
import image6 from "../../assets/images/high-angle-cosmetic-containers-arrangement 1.png"


const interestClasses = "group relative flex-none w-64 rounded-lg shadow-md";
const buttonClasses = "absolute bottom-4 left-4 bg-white dark:bg-zinc-700 p-2 rounded-full shadow-lg";
const tagClasses = "absolute bottom-4 right-4 bg-white dark:bg-zinc-700 py-2 px-4 rounded-lg shadow-md";
const textClasses = "text-sm text-zinc-800 dark:text-zinc-200";


const InterestPage = () => {
  

  const categories = [
    { name: 'Electronics', picture :image2 },
    { name: 'Clothes', picture :image1},
    { name: 'Shoes' ,picture :image3},
    { name: 'Mobile',picture :image4 },
    { name: 'Hygiene' ,picture :image5},
    { name: 'Cosmetics',picture :image6 }
    
  ];

  const [selectedInterests, setSelectedInterests] = useState(Array(categories.length).fill(false));

  const toggleInterest = (index) => {
    const updatedInterests = [...selectedInterests];
    updatedInterests[index] = !updatedInterests[index];
    setSelectedInterests(updatedInterests);
  };

  return (
    <>
    
    <h2 className="text-2xl font-semibold text-center mb-6">Select categories of interest.</h2>
    <div className="flex flex-row overflow-x-auto space-x-4">
      {categories.map((category, index) => (
        <div key={index} className={interestClasses}>
          <img key={index} src={category.picture} alt={`Img ${index + 1}`} />
          <button className={buttonClasses} onClick={() => toggleInterest(index)}>
            {selectedInterests[index] ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            ) : null}
          </button>
          <div className={tagClasses}>
            <span className={textClasses}>{category.name}</span>
          </div>
        </div>
      ))}
      <Navbar/>
    </div>
    
  
    </>
  );
};

export default InterestPage;
