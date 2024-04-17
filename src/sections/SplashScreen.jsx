import React, { useState, useEffect } from "react";
import logo from "../assets/images/Plan de travail 38 1.png";

const SplashScreen = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 3000); // Change 3000 to the number of milliseconds you want to delay

    // // Navigate to the onboarding page after showing the logo
    // if (showLogo) {
    //   setTimeout(() => {
    //     window.location.href = "/onboarding";
    //   }, 2000); // Change 2000 to the number of milliseconds you want to wait before navigation
    // }

    return () => clearTimeout(timer);
  }, [showLogo]);

  return (
    <div className="h-screen flex items-center justify-center bg-blue-500 ">
      {showLogo && (
        <div className="text-center text-white flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-24 w-24 mb-4" />
          <p>Promotions and catalogs near you!</p>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
