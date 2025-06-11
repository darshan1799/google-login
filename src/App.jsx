import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import LoginButton from "./Components/LoginButton";

import ProfileCard from "./Components/ProfileCard";
import { useAuth } from "./Store/authContext";
import Loader from "./Components/Loader";

export default function App() {
  const { islogin, isloading, checkAuth } = useAuth();
  useEffect(() => {
    checkAuth();
  }, []);
  if (isloading) {
    return <Loader />;
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {!isloading && !islogin ? <LoginButton /> : <ProfileCard />}
      <ToastContainer />
    </div>
  );
}
