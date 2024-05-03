import React from 'react';
import Slide2 from "../../assets/images/elegant-smartphone-composition-removebg-preview.png"
import Shoeslide from "../../assets/images/portrait-african-american-man-pleased-with-his-shoe-choice-happy-dark-haired-man-holding-new-shoe-boutique-showing-it-camera-laughing-buying-menswear-clothes-business-concept 2.png"
import chairphoto from "../../assets/images/interior-home-decor-with-photo-frames.png"
import Hygiene from "../../assets/images/arrangement-with-sanitary-products 1.png"
import Cosmetics from "../../assets/images/high-angle-cosmetic-containers-arrangement 1.png"
import Clothes from "../../assets/images/still-life-say-no-fast-fashion (1) 1.png"

const cardContainerClasses = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6";
const itemContainerClasses = "max-w-sm rounded overflow-hidden shadow-lg";
const imageClasses = "w-full";
const contentClasses = "px-6 py-4";
const titleClasses = "font-bold text-xl mb-2 text-center";

const AllCategoriesCard = () => {
  return (
    <div className={cardContainerClasses}>
      
      <div className={itemContainerClasses}>
        <img className={imageClasses} src={Cosmetics} alt="Product Img" />
        <div className={contentClasses}>
          <div className={titleClasses}>Cosmetics</div>
        </div>
      </div>

     
      <div className={itemContainerClasses}>
        <img className={imageClasses} src={Hygiene} alt="Product Img" />
        <div className={contentClasses}>
          <div className={titleClasses}>Hygiene</div>
        </div>
      </div>

      <div className={itemContainerClasses}>
        <img className={imageClasses} src={chairphoto} alt="Product Img" />
        <div className={contentClasses}>
          <div className={titleClasses}>Chair</div>
        </div>
      </div>

      <div className={itemContainerClasses}>
        <img className={imageClasses} src={Shoeslide} alt="Product Img" />
        <div className={contentClasses}>
          <div className={titleClasses}>Shoes</div>
        </div>
      </div>
      <div className={itemContainerClasses}>
        <img className={imageClasses} src={Clothes} alt="Product Img" />
        <div className={contentClasses}>
          <div className={titleClasses}>Clothes</div>
        </div>
      </div>

      
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
