import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import LandingPage from "./pages/landing";
import HomePage from "./pages/home";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {user ? (
            <Route path="/home" element={<HomePage />} />
          ) : (
            <Route path="/home" element={<LoginPage />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
