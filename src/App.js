
import './App.css';
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
  </>
  );

}

export default App;
