import React from "react";
import { TypeAnimation } from "react-type-animation";
import logo from "../images/logo.svg";
import { useNavigate, Link } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }
  function handleSignup() {
    navigate("/signup");
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-400 to-blue-500">
      <div className="h-[60vh] w-[60vw] m-6 shadow-2xl rounded-2xl md:flex-row md:space-y-0 bg-gradient-to-tr from-[#080D0D] from-70% to-[#173B4D]">
        <div className="p-8 relative">
          <div className="w-24">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex flex-col justify-center p-8 md:p-14 hidden md:block object-cover">
          <span className="mb-3 text-4xl text-white font-bold">
            <TypeAnimation
              sequence={[
                "Hello World !!!",
                1000,
                "Welcome to LOGO",
                1000,
                "Login/Signup 👇👇",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </div>
        <div className="flex flex-col justify-center p-8 md:p-14 lg:hidden object-cover">
          <span className="mb-3 text-4xl text-white font-bold">
            Hello!!! Welcome to LOGO
          </span>
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row">
          <button
            className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-[Poppins] duration-500 px-6 py-3.5 rounded-lg font-bold text-3xl uppercase mb-5 md:mb-0 md:mr-10"
            onClick={handleLogin}
          >
            Log in
          </button>
          <button
            className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-[Poppins] duration-500 px-6 py-3.5 rounded-lg font-bold text-3xl uppercase"
            onClick={handleSignup}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
