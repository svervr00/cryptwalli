"use client";

import { useState , ChangeEvent} from "react";
import Link from "next/link";
import logo from "../../../public/Images/Logo(1).jpg"
import Image from "next/image";

const Register = () => {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
      };      

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
                <div className="w-full flex justify-center pb-2 text-center">
                    <Link href="/" className="w-1/2">
                        <Image src={logo} alt="Logo image" className="w-full" />
                    </Link>
                </div>
                <h2 className="text-2xl font-bold text-center text-[#4A3AFF] mb-4">
                    Create a CryptWalli Account
                </h2>
                <form className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={form.firstname}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={form.lastname}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md"
                    />
                    <button className="bg-[#5c4efc] text-white p-3 rounded-md hover:bg-indigo-700 transition-all">
                        Register
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="text-[#5c4efc] font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

