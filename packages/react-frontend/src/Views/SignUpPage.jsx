import React, { useState, useEffect } from "react";
import Auth from "../Components/Auth";
import "../Styles/Navbar.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  function createUser(user) {
    console.log(user);
    fetch("https://safehavenapp.azurewebsites.net//users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((response) => {
        if (!response.ok) {
          alert("Username already taken");
          throw new Error("Username already taken");
        }
        return response.text();
      })
      .then((token) => {
        console.log(token);
        Cookies.remove("safeHavenToken");
        Cookies.set("safeHavenToken", token, {
          expires: 24 / 24,
          path: "/", 
          secure: false, 
          sameSite: "strict"
        });
        navigate("/inventory");
      });
  }
  return (
    <div className="ProductList">
      <h1>Signup Page:</h1>
      <Auth handleSubmit={createUser} />
    </div>
  );
}

export default Signup;
