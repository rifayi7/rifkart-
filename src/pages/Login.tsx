import { Link, useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import { useAuth } from "../context/ProtectPage";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const password = formData.get("password") as string;
    if (name === "admin" && password === "admin") {
      login();
      navigate("/");
    }
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] p-10 rounded-2xl shadow-md border border-neutral-200">
        <div className="mb-8">
          <p className="text-tiddy-gray text-lg mb-1">
            Please enter your details
          </p>
          <h1 className="text-4xl font-bold text-gray-800">Welcome Back</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            className="rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="name"
            name="name"
            placeholder="User name"
          />
          <input
            className="rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md text-lg font-semibold transition"
            type="submit"
          >
            Login
          </button>
        </form>

        {/*  Signup  */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
