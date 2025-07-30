import { useEffect, useState, type FormEvent } from "react";
import { useFormState } from "react-dom";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<{ message?: string; status?: string }>(
    {}
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "admin" && password === "admin") {
      localStorage.setItem("username", name);
      localStorage.setItem("password", password);
      setMessage({ message: "login successful", status: "success" });
      navigate("/");
    } else {
      setMessage({ message: "login failed", status: "error" });
    }
  };
  useEffect(() => {
    if (message.message) {
      console.log(message.message);
    }
  }, [message]);
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] p-10 rounded-2xl shadow-md border border-neutral-200">
        <div className="mb-8">
          {message.message && (
            <span
              className={`${
                message.status === "error" ? "text-red-500" : "text-green-400"
              }`}
            >
              {message.message}
            </span>
          )}
          <p className="text-tiddy-gray text-lg mb-1">
            Let's create your account
          </p>
          <h1 className="text-4xl font-bold text-gray-800">Sign Up</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            required
            className="rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            className="rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="email"
            name="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md text-lg font-semibold transition"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        {/* 👇 Login link */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
