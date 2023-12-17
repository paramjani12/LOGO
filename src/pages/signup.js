import { React, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import googleimg from "../images/google.svg";
import logo from "../images/logo.svg";
import homepic from "../images/home-pic.svg";
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useOnKeyPress } from "../hooks/useOnKeyPress";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSignUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("Signup successful!!! Please login");
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Invalid signup details");
        // console.log(errorCode, errorMessage);
        // ..
      });
  };

  useOnKeyPress("Enter", onSignUp);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-400 to-blue-500">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 bg-gradient-to-tr from-[#080D0D] from-70% to-[#173B4D]">
        <div className="p-8 relative">
          <div className="w-24">
            <img src={logo} alt="logo" />
          </div>
          <img
            src={homepic}
            alt="img"
            className="w-72 h-72 mx-12 my-28 hidden rounded-l-2xl md:block object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl text-white font-bold">
            Create your account
          </span>
          <div className="py-4 relative flex items-center">
            <FaUser
              size="25"
              color="white"
              className="absolute pointer-events-none ml-1.5 p-0.5"
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[48px] pl-10 p-2 bg-transparent border border-white rounded-md text-white placeholder:font-light placeholder:text-white"
            />
          </div>
          <div className="py-4 relative flex items-center">
            <MdEmail
              size="25"
              color="white"
              className="absolute pointer-events-none ml-1.5 p-0.5"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[48px] pl-10 p-2 bg-transparent border border-white rounded-md text-white placeholder:font-light placeholder:text-white"
            />
          </div>
          <div className="py-4 relative flex items-center">
            <MdOutlinePassword
              size="25"
              color="white"
              className="absolute pointer-events-none ml-1.5 p-0.5"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[48px] pl-10 p-2 bg-transparent border border-white rounded-md text-white placeholder:font-light placeholder:text-white"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md text-white">
                I agree to the Terms & Conditions
              </span>
            </div>
          </div>
          <button
            onClick={onSignUp}
            className="w-full bg-white text-black p-2 rounded-lg mb-6 hover:bg-white hover:text-black"
          >
            Sign up
          </button>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 bg-transparent text-white">
            <img src={googleimg} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Already have an account?
            <Link to="/login" className="font-bold text-white">
              {" "}
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
