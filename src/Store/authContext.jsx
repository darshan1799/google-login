import { createContext, useContext, useState } from "react";
const baseUrl = import.meta.env.VITE_BASE_URL;

const AuthContext = createContext({
  islogin: false,
  userInfo: null,
  setLogin: () => {},
  setUserInfo: () => {},
  isloading: false,
  checkAuth: () => {},
});

export const AuthWrapper = ({ children }) => {
  const [islogin, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [isloading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const checkAuth = async () => {
    setLoading(true);
    const userRes = await fetch(`${baseUrl}/api/info`, {
      credentials: "include",
    });
    const res = await userRes.json();
    if (userRes.ok) {
      setUserInfo(res.user);
      setLogin(true);
    } else {
      setUserInfo(null);
      setLogin(false);
    }
    setLoading(false);
  };
  return (
    <AuthContext.Provider
      value={{ islogin, userInfo, setLogin, setUserInfo, checkAuth, isloading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
