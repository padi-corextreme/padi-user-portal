import React from 'react';
import cardimage from '../../assets/images/beautiful-young-woman-shopping-food 1.png'
import Slide2 from "../../assets/images/elegant-smartphone-composition-removebg-preview.png"
import Shoeslide from "../../assets/images/portrait-african-american-man-pleased-with-his-shoe-choice-happy-dark-haired-man-holding-new-shoe-boutique-showing-it-camera-laughing-buying-menswear-clothes-business-concept 2.png"

const cardContainerClasses = "grid grid-cols-3 gap-4"; // Changed to grid-cols-3
const itemContainerClasses = "max-w-sm rounded overflow-hidden shadow-lg";
const imageClasses = "w-full";
const contentClasses = "px-6 py-4";
const titleClasses = "font-bold text-xl mb-2 text-center";

const AllCategoriesCard = () => {
  return (
    <div className={cardContainerClasses}>
      {/* First Item */}
      <div className={itemContainerClasses}>
        <img className={imageClasses} src={cardimage} alt="Product Img" />
        <div className={contentClasses}>
          <div className={titleClasses}>Grocery</div>
        </div>
      </div>

      {/* Second Item */}
      <div className={itemContainerClasses}>
        <img className={imageClasses} src={Shoeslide} alt="Product Img" />
        <div className={contentClasses}>
          <div className={titleClasses}>Shoes</div>
        </div>
      </div>

      {/* Third Item */}
      <div className={itemContainerClasses}>
        <img className={imageClasses} src={Slide2} alt="Product Img" />
        <div className={contentClasses}>
          <div className={titleClasses}>Mobile</div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesCard;
