import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InterestOptionPage from "./sections/InterestOptions";
import OnboardingPage from "./sections/Onboarding";
import SignUpPage from "./sections/SignUpPage";
import LoginPage from "./sections/loginPage";
import SplashScreen from "./sections/SplashScreen";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/profile";
import WishlistPage from "./pages/home/wishlistPage/wishlistPage";
import InterestPage from "./pages/interest/interestPage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  { path: "/", element: <SplashScreen /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/onboarding", element: <OnboardingPage /> },
  { path: "/interestoptions", element: <InterestOptionPage /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/wishlist", element: <WishlistPage /> },
  { path: "/interest", element: <InterestPage /> },
]);

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
