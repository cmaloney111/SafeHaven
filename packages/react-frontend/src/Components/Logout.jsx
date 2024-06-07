import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
    Cookies.remove('safeHavenToken');

    navigate("/");
  }, [navigate]);

  return null;
};

export default Logout;