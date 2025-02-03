/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
//import { useNavigate } from "react-router-dom";
import React from "react";
import "./notfound.css";
export default function NotFoundPage() {
  //const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4 " style={{marginBottom:'150px'}}>
      <h1 className=" text-404">
        4
        <span className="">😢</span>
        4
      </h1>
      <h2 className="text-2xl  ">
        The Page you were looking for, couldn't be found.
      </h2>
      <p className="text-gray-600 ">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <div className="">
        <button
          onClick={() => console.log("done") /*navigate(-1)*/}
          className="btn-back "
        >
          Back
        </button>
        <button
          onClick={() => console.log("done") /*navigate("/")*/}
          className="btn-back-to-home"
        >
          Back To Home
        </button>
      </div>
    </div>
  );
}
