import React, { useState, useEffect } from "react";
import Auth from "../Components/Auth";
import "../Styles/Navbar.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function authenticateUser(user) {
    console.log(user);
    fetch("https://safehavenapp.azurewebsites.net//login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((response) => {
        if (!response.ok) {
          alert("Invalid username/password");
          throw new Error("Invalid username/password");
        }
        return response.text();
      })
      .then((token) => {
        Cookies.remove("safeHavenToken");
        Cookies.set("safeHavenToken", token, {
          expires: 24 / 24,
          path: "/",
          secure: false,
          sameSite: "strict"
        });
        console.log(token);
        console.log(Cookies.get("safeHavenToken"));
        navigate("/inventory");
      });
  }
  return (
    <div className="ProductList">
      <h1>Login Page:</h1>
      <Auth handleSubmit={authenticateUser} />
    </div>
  );
}

export default Login;
