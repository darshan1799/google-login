import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../Store/authContext";

const baseUrl = import.meta.env.VITE_BASE_URL;

export default function ProfileCard() {
  const { checkAuth } = useAuth();
  const { userInfo } = useAuth();
  console.log(userInfo);
  const handleLogout = async () => {
    const logoutRes = await fetch(`${baseUrl}/api/logout`, {
      credentials: "include",
    });
    const res = await logoutRes.json();
    if (logoutRes.ok) {
      toast.success(res.msg);
      await checkAuth();
    } else {
      toast.error(res.msg);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <img
          className="w-24 h-24 rounded-full object-cover mb-6 border-2 border-gray-200"
          src="https://lh3.googleusercontent.com/a/ACg8ocJPi3OJO5kDi7JcMk2Afbm9jitibRPJ_-wynGLwCodzZF1ePA=s96-c"
          alt={userInfo?.name || "User"}
          referrerPolicy="no-referrer"
        />

        {/* User Information */}
        <div className="text-center space-y-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{userInfo?.name}</h2>
          <p className="text-gray-600">{userInfo?.email || ""}</p>
          <p className="text-gray-600">{userInfo?.phoneNumber || ""}</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
