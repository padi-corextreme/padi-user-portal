
import './App.css';
import InterestOptionPage from './sections/InterestOptions';
import OnboardingPage from './sections/Onboarding';
import LoginPage from './sections/SignIn';
import SignUpPage from './sections/SignUpPage';
import SplashPage from './sections/SplashScreen';
import { UserContextProvider } from './services/userContext';





function App() {

  return (
   <>
    <UserContextProvider>
   <SplashPage />
  <SignUpPage />
  <LoginPage />
  
  <OnboardingPage />
  <InterestOptionPage />
  </UserContextProvider>
  </>
  );

}

export default App;
