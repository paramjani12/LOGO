import { React, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./home.css";

import ReactPaginate from "react-paginate";

import logo from "../images/logo.svg";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        // Sign-out successful.
        toast.success("Logout successful! Please visit again");
        navigate("/");
        // console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        toast.error("Please try logout again!");
      });
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setPosts(data);
      // setLoading(false);
    } catch (error) {
      // setError(error.message);
      // setLoading(false);
    }
  };

  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 21;
  const pagesVisited = pageNumber * postsPerPage;

  const displayPosts = posts
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return (
        <article
          key={post.id}
          className="card flex max-w-xl flex-col items-start justify-between p-3"
        >
          <div className="flex items-center gap-x-4 text-xs">
            <time className="text-gray-500">Dec 17, 2023</time>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
              <span className="absolute inset-0" />
              {post.title}
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {post.body}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <span className="absolute inset-0" />
                Author
              </p>
              <p className="text-gray-600">UserID : {post.userId}</p>
            </div>
          </div>
        </article>
      );
    });

  const pageCount = Math.ceil(posts.length / postsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="p-5 bg-gradient-to-tr from-[#080D0D] from-50% to-[#173B4D] shadow flex items-center justify-between ">
        <img className="h-10 w-50 " src={logo} />

        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 rounded "
        >
          Sign out
        </button>
      </nav>

      <div className="bg-white mt-10 mb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our blogs
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              "The first step in blogging is not writing them but reading them"
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 mt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {displayPosts}
          </div>
        </div>
      </div>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previosBtn"}
        nextLinkClassName={"nextBtn"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};

export default HomePage;
