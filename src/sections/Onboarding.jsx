import React, { useState } from "react";
import Image1 from "../assets/images/Illustration.png";
import Image2 from "../assets/images/Illustration 2.png";
import Image3 from "../assets/images/illustration 3.png";

const OnboardingPage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [Image1, Image2, Image3];
  const texts = [
    "Trouvez le meilleur article pour vous.Nisl pellentesque etiam faucibus etiam semper cras scelerisque vel ante. Augue.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ];

  const handleNext = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  const handleRegister = () => {
    // Handle registration action
    console.log("User registered!");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center white-500 text-black">
      <img src={images[imageIndex]} alt={`Illustration ${imageIndex + 1}`} className="mb-4" />
      <p className="text-center mb-8">{texts[imageIndex]}</p>
      {imageIndex < images.length - 1 ? (
        <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded">
          Next
        </button>
      ) : (
        <button onClick={handleRegister} className=" bg-orange-500 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      )}
    </div>
  );
};

export default OnboardingPage;
