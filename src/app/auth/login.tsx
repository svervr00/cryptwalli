"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "../../../public/Images/Logo(1).jpg"
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <div className="w-full flex justify-center pb-2 text-center">
          <Link href="/" className="w-1/2">
            <Image src={logo} alt="Logo image" className="w-full" />
          </Link>
        </div>
        <h2 className="text-2xl font-bold text-center text-[#4A3AFF] mb-6">
          Login to CryptWalli
        </h2>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-md"
          />
          <button className="bg-[#5c4efc] text-white p-3 rounded-md hover:bg-indigo-700 transition-all">
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
        Don&rsquo;t have an account?{' '}
          <Link href="/auth/register" className="text-[#5c4efc] font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
