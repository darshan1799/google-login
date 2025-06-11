import { auth, provider } from "../utils/Firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
const baseUrl = import.meta.env.VITE_BASE_URL;
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../Store/authContext";

export default function LoginButton() {
  const { checkAuth } = useAuth();
  const googleLogin = async () => {
    const response = await signInWithPopup(auth, provider);
    const { user } = response;
    const { email, phoneNumber, displayName: name, photoURL } = user;
    const loginRes = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        photoURL,
      }),
    });
    const res = await loginRes.json();
    if (loginRes.ok) {
      checkAuth();
      toast.success(res.msg);
    } else {
      toast.success(res.msg);
    }
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h1>
        <p className="text-gray-600">Sign in to continue to your account</p>
      </div>

      <button
        onClick={googleLogin}
        className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 rounded-xl py-3 px-4 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
      >
        <FcGoogle className="w-5 h-5" />
        Continue with Google
      </button>
    </div>
  );
}
