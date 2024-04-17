
import './App.css';

import HomePage from './pages/home/homePage';
import InterestCategory from './sections/InterestCategory';
import OnboardingPage from './sections/Onboarding';
import SignUpPage from './sections/SignUpPage';
import SplashScreen from './sections/SplashScreen';
import AllCategoriesCard from './sections/homesections/AllCategories';
import BestDealsCard from './sections/homesections/BestDeal';
import DiscountCard from './sections/homesections/Discount';


import LoginPage from './sections/loginPage';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import InterestOptionPage from './sections/InterestOptions';
// import OnboardingPage from './sections/Onboarding';
// import SignUpPage from './sections/SignUpPage';
// import LoginPage from './sections/loginPage';
// import SplashScreen from './sections/SplashScreen';

// const router = createBrowserRouter([
//   { path: "/", element: <SplashScreen /> },
//   { path: "/signup", element: <SignUpPage/> },
//   { path: "/login", element: <LoginPage /> },
//   { path: "/onboarding", element: <OnboardingPage/> },
//   { path: "/interestoptions", element: <InterestOptionPage/> },
// ]);



function App() {

  return (
   <>

   <SplashScreen />
   <OnboardingPage/>
   <SignUpPage />
   <LoginPage />
   <InterestCategory />
   <AllCategoriesCard />
   <BestDealsCard />
   <DiscountCard />
   <HomePage />

  
  </>
  );

}

export default App;
