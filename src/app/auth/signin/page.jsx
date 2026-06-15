"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, TextField, Label, Input, Button } from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import toast, { Toaster } from "react-hot-toast";
import { authClient } from "@/lib/auth-client"; 

export default function SigninPage() {
  const router = useRouter();
  
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      tempErrors.password = "Password is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    // Better Auth sign-in implementation
    const { data, error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,      
    });

    setIsLoading(false);
    
    if (error) {
      toast.error(error.message || "Invalid email or password.");
    } else {
      toast.success("Welcome back! Redirecting...");
      router.push(redirectTo);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 text-white">
      <Toaster position="top-center" reverseOrder={false} />
      
      <Card className="w-full max-w-md p-8 bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-col gap-6 text-white">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-zinc-100">Welcome Back</h1>
          <p className="text-sm text-zinc-400">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {/* Email Field */}
          <TextField isInvalid={!!errors.email} className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-300">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus-visible:border-blue-500 focus-visible:outline-none transition"
            />
            {errors.email && <span className="text-xs text-red-500 px-1">{errors.email}</span>}
          </TextField>

          {/* Password Field */}
          <TextField isInvalid={!!errors.password} className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-300">Password</Label>
            <div className="relative flex items-center">
              <Input
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                type={isVisible ? "text" : "password"}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 pl-3 pr-10 py-2 text-sm text-white placeholder:text-zinc-500 focus-visible:border-blue-500 focus-visible:outline-none transition"
              />
              <button 
                className="absolute right-3 focus:outline-none text-zinc-400 hover:text-zinc-200 transition" 
                type="button" 
                onClick={toggleVisibility}
              >
                {isVisible ? <EyeSlash className="text-lg" /> : <Eye className="text-lg" />}
              </button>
            </div>
            {errors.password && <span className="text-xs text-red-500 px-1">{errors.password}</span>}
          </TextField>

          { 
            <Button
            type="submit"
            className="mt-4 font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-2.5"
            isLoading={isLoading}
            fullWidth
          >
            Sign In
          </Button>}
        </form>

        <div className="text-center text-sm text-zinc-400">
          New to Hire Loop?{" "}
          <Link href={`/auth/signup?redirect=${redirectTo}`} className="font-semibold text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </Card>
    </div>
  );
}