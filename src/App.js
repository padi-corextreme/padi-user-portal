
import './App.css';
import ProductCard from './components/ProductDetail-card/ProductDetail-card';


import InterestOptionPage from './sections/InterestOptions';
import OnboardingPage from './sections/Onboarding';
import LoginPage from './sections/SignIn';
import SignUpPage from './sections/SignUpPage';
import SplashPage from './sections/SplashScreen';





function App() {

  return (
   <>
   <SplashPage />
  <SignUpPage />
  <LoginPage />
  
  <OnboardingPage />
  <InterestOptionPage />
  <ProductCard/>
 
  </>
  );

}

export default App;
