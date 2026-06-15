"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, TextField, Label, Input, Button, Radio, RadioGroup } from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import toast, { Toaster } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const router = useRouter();
  // const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",    
  });
  const [role, setRole] = useState("seeker");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      tempErrors.password = "Password is too weak.";
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
    
    const plan = role === 'seeker' ? 'seeker_free' : 'recruiter_free';

    const { data, error } = await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      role,
      plan      
    });

    setIsLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created successfully!");
      router.push(redirectTo);
    }
  };
  // console.log(formData, 'formData');

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 text-white">
      <Toaster position="top-center" reverseOrder={false} />

      <Card className="w-full max-w-md p-8 bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-col gap-6 text-white">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-zinc-100">Create an Account</h1>
          <p className="text-sm text-zinc-400">Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Name Field */}
          <TextField isInvalid={!!errors.name} className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-300">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus-visible:border-blue-500 focus-visible:outline-none transition"
            />
            {errors.name && <span className="text-xs text-red-500 px-1">{errors.name}</span>}
          </TextField>

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
          {/* <div className="flex flex-col gap-4">
            <Label>Subscription plan</Label>
            <RadioGroup defaultValue="seeker" name="role" orientation="horizontal">
              <Radio value="seeker">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label>Job Seeker</Label>
                </Radio.Content>
              </Radio>
              <Radio value="recruiter">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label>Recruiter</Label>
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div> */}
          <div className="flex flex-col gap-4">
            <Label>Account Type</Label>
            <RadioGroup defaultValue="seeker" name="role"
              value={formData.role}
              onChange={(value) =>
                // setFormData((prev) => ({
                //   ...prev,
                //   role: value,
                // }))
                setRole(value)
              }
              orientation="horizontal"
            >
              <Radio value="seeker">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label>Job Seeker</Label>
                </Radio.Content>
              </Radio>

              <Radio value="recruiter">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label>Recruiter</Label>
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div>

          <Button
            type="submit"
            className="mt-4 font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-2.5"
            isLoading={isLoading}
            fullWidth            
          >
            Sign Up
          </Button>
        </form>

        <div className="text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link href={`/auth/signin?redirect=${redirectTo}`} className="font-semibold text-blue-500 hover:underline">
            Log In
          </Link>
        </div>
      </Card>
    </div>
  );
}