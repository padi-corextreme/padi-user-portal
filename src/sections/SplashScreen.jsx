import React, { useState, useEffect } from "react";
import logo from "../assets/images/Plan de travail 38 1.png";

const SplashPage = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 3000); // Change 3000 to the number of milliseconds you want to delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-500 text-white">
      {showLogo && (
        <div className="text-center">
          <img src={logo} alt="Logo" className="h-24 w-24 mb-4 " />
          <p>Promotions and catalogs near you!</p>
        </div>
      )}
    </div>
  );
};

export default SplashPage;
